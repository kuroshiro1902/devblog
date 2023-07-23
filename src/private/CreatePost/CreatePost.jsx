import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import reduceImageFile from '../../utils/images/reduceImageFile';
import host from '../../host.config';
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
import s from './CreatePost.module.scss';
import { createImageFilesFromSrcs, sendAllFilesToUrl, dataValidation } from './prepocessors';
import getCategories from '../../alternates/getCategories';

let editorDOM;
function WritePost() {
  const [categories, setCategories] = useState([]);
  //
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
  //temp
  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);
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
    const { valid, message } = dataValidation(data);
    if (!valid) {
      alert(message);
      return;
    }
    //
    setIsUploadingImageFile(true);
    //tạo editor ảo
    const editor = document.createElement('div');
    editor.innerHTML = data.content;
    //lấy ra các thẻ img trong editor ảo
    const imgTags = editor.getElementsByTagName('img');
    //lấy ra các src và đổi src của img
    const imgSrcs = Array.from(imgTags).map((image, index) => {
      const src = image.src;
      image.setAttribute('src', `image${index}`);
      return src;
    });
    //tạo các ảnh từ các src trong content
    createImageFilesFromSrcs(imgSrcs)
      .then((files) => {
        //Thêm file thumbnail vào CUỐI
        files.push(data.thumbnailFile);
        //gửi files
        return sendAllFilesToUrl(files, host + '/uploadtocloud');
      })
      .then(async (responses) => {
        //Lấy ra response cuối cùng (là res của thumbnail)
        const { imageUrl: thumbnailUrl } = responses.pop();
        //Xét lại url của các thẻ img
        responses.forEach(({ index, imageUrl }) => {
          imgTags[index].setAttribute('src', imageUrl);
        });
        //Xét lại thumbnail của data
        data.thumbnailUrl = thumbnailUrl;
        //Xét lại content của data
        data.content = editor.innerHTML;

        console.log('send: ', data);
        return axios.post(host + '/posts/create', data);
      })
      .then(async (response) => {
        console.log('res: ', response.data);
        setIsUploadingImageFile(false);
      })
      .catch((error) => {
        alert('Server không phản hồi. Vui lòng thử lại sau');
        console.error(error);
        setIsUploadingImageFile(false);
      });
  }, []);
  return (
    <>
      {/* <CreatePostContext.Provider /> */}
      <form className={s.createPost}>
        <section className={s.title}>
          <h3>TITLE</h3>
          <TextFormInput placeholder="Title" name={'title'} required value={title} onChange={setTitle} />
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
              optionDatas={categories}
              handleSelectedOptions={setSelectedCategories}
              name={'categories'}
            />
          </div>
        </section>
        <section className={s.hashtag}>
          <h3>hashtags</h3>
          <HashtagSelect optionDatas={categories} handleSelectedOptions={setSelectedCategories} name={'categories'} />
        </section>
        <Editor />
        <div className={s.buttons}>
          <SecondaryButton
            onClick={() => {
              setIsPreviewing(true);
            }}
          >
            Preview
          </SecondaryButton>
          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              //tạo data gửi đi
              let data = {
                title: title.trim(),
                thumbnailFile,
                selectedCategories,
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
            content={editorDOM.innerHTML}
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
