import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import useGetData from '../../hooks/useGetData';
import host from '../../host.config';
import reduceImageFile from '../../utils/images/reduceImageFile';
import {
  Editor,
  TextFormInput,
  CheckboxSelect,
  PrimaryButton,
  SecondaryButton,
  Overlay,
  Loading,
  HashtagSelect,
} from '../../components';
import Preview from './Preview';
import { createImageFilesFromSrcs, sendAllFilesToUrl, dataValidation } from './prepocessors';
import s from './CreatePost.module.scss';
let editorDOM;
const virtualEditor = document.createElement('div');
function WritePost() {
  const { data: categories, isFetching: isFetchingCategories } = useGetData(['categories'], {
    url: `${host}/categories`,
  });
  //form Data
  const [title, setTitle] = useState('');
  const [thumbnailFile, setThumbnailFile] = useState(''); //type: File
  const [selectedCategories, _setSelectedCategories] = useState([]);
  const [selectedHashtags, _setSelectedHashtags] = useState([]);
  //memoized cb
  const setSelectedCategories = useCallback(_setSelectedCategories, []);
  const setSelectedHashtags = useCallback(_setSelectedHashtags, []);
  //
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isUploadingImageFile, setIsUploadingImageFile] = useState(false);
  const thumbnailRef = useRef();
  //
  useEffect(() => {
    editorDOM = document.getElementsByClassName('ql-editor')[0];
  }, []);
  const handleThumbnailImage = useCallback((e) => {
    const [file] = e.target.files;
    if (file) {
      reduceImageFile(file, setThumbnailFile);
    } else {
      setThumbnailFile('');
    }
  }, []);
  const handleSend = useCallback((data) => {
    //validation data
    const validationData = { content: data.content, title: data.title };
    const { valid, message } = dataValidation(validationData);
    if (!valid) {
      alert(message);
      return;
    }
    //
    setIsUploadingImageFile(true);
    //tạo editor ảo
    virtualEditor.innerHTML = data.content;
    //lấy ra các thẻ img trong editor ảo
    const imgTags = virtualEditor.getElementsByTagName('img');
    //lấy ra các src và đổi src của img
    const imgSrcs = Array.from(imgTags).map((image, index) => {
      const src = image.src;
      image.setAttribute('src', `image${index}`);
      return src;
    });
    async function uploadData() {
      try {
        //tạo các ảnh từ các src trong content
        const files = await createImageFilesFromSrcs(imgSrcs);

        // Thêm file thumbnail vào CUỐI
        if (data.thumbnailFile) files.push(data.thumbnailFile);

        // Gửi files
        const responses = await sendAllFilesToUrl(files, host + '/uploadtocloud');

        // Lấy ra response cuối cùng (là res của thumbnail)
        if (data.thumbnailFile) {
          const { imageUrl: thumbnailUrl } = responses.pop();
          // Xét lại thumbnail của data
          data.thumbnailUrl = thumbnailUrl;
        }

        // Xét lại url của các thẻ img
        responses.forEach(({ index, imageUrl }) => {
          imgTags[index].setAttribute('src', imageUrl);
        });

        // Xét lại content của data
        data.content = virtualEditor.innerHTML;

        console.log('send: ', data);
        const response = await axios.post(host + '/posts/create', data);
        console.log('res: ', response.data);
        setIsUploadingImageFile(false);
      } catch (error) {
        alert('Server không phản hồi. Vui lòng thử lại sau');
        console.error(error);
        setIsUploadingImageFile(false);
      }
    }

    uploadData();
  }, []);
  return (
    <>
      <form className={s.createPost}>
        <section className={s.title}>
          <h3>TITLE</h3>
          <TextFormInput
            placeholder="Title"
            name={'title'}
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </section>
        <section className={s.thumbnail}>
          <h3>THUMBNAIL</h3>

          {thumbnailFile && (
            <div className={s.previewThumbnail}>
              <img src={URL.createObjectURL(thumbnailFile)} />
              <span
                className={s.close}
                title="Delete thumbnail"
                onClick={() => {
                  setThumbnailFile('');
                  thumbnailRef.current.value = '';
                }}
              >
                x
              </span>
            </div>
          )}
          <input
            ref={thumbnailRef}
            className={s.imgFile}
            onChange={handleThumbnailImage}
            name="thumbnail"
            required
            type="file"
            accept="image/png, image/gif, image/jpeg, image/webp, image/jpg"
          />
        </section>
        <section className={s.category}>
          <h3>Categories</h3>
          <div style={{ maxWidth: 600 }}>
            <CheckboxSelect
              optionDatas={!isFetchingCategories && !!categories ? categories : []}
              handleSelectedOptions={setSelectedCategories}
              name={'categories'}
            />
          </div>
        </section>
        {/* <section className={s.hashtag}>
          <h3>hashtags</h3>
          <HashtagSelect handleSelectedOptions={setSelectedHashtags} name={'hashtags'} />
        </section> */}
        <Editor />
        <small style={{ color: 'crimson' }}>
          *This is just a beta version, some editor features may not work properly (e.g. copying and pasting images), we
          recommend you to upload images instead of pasting images into the editor.
        </small>
        <div className={s.buttons}>
          <SecondaryButton
            onClick={() => {
              setIsPreviewing(true);
            }}
            type="button"
          >
            Preview
          </SecondaryButton>
          <PrimaryButton
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              // tạo data gửi đi
              const data = {
                title: title.trim(),
                thumbnailFile,
                categories: selectedCategories.map((category) => {
                  delete category.selected;
                  return category;
                }),
                hashtags: selectedHashtags,
                content: editorDOM.innerHTML,
              };
              handleSend(data);
            }}
          >
            POST
          </PrimaryButton>
        </div>
        {isUploadingImageFile && (
          <Overlay>
            <Loading>Uploading images...</Loading>
          </Overlay>
        )}
        {isPreviewing && (
          <Preview
            data={{
              title: title.trim(),
              thumbnailFile,
              categories: selectedCategories,
              hashtags: selectedHashtags,
              content: editorDOM.innerHTML,
            }}
            handleClose={() => {
              setIsPreviewing(false);
            }}
          />
        )}
      </form>
    </>
  );
}

export default WritePost;
