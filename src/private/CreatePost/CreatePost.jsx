import { useCallback, useEffect, useReducer, useRef, useState } from 'react';
import axios from 'axios';
import reduceImageFile from '../../utils/images/reduceImageFile';
import sendFileToUrl from '../../utils/sendFile/sendFileToUrl';
import React from 'react';
import {
  Editor,
  TextFormInput,
  CheckboxSelect,
  PrimaryButton,
  SecondaryButton,
  Overlay,
  Loading,
} from '../../components';
import Preview from './Preview';
import s from './CreatePost.module.scss';
import { createImageFilesFromSrcs } from './prepocessors';
import getCategories from '../../alternates/getCategories';

let editorDOM;
function WritePost() {
  const [categories, setCategories] = useState([]);
  //
  const [title, setTitle] = useState('');
  const [thumbnailFile, setThumbnailFile] = useState(''); //type: File
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedHashtags, setSelectedHashtags] = useState([]);
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
  const handleSend = () => {
    //tạo data gửi đi
    let data = {
      title,
      thumbnailUrl: '',
      content: '',
    };
    setIsUploadingImageFile(true);
    //tạo editor ảo
    const editor = document.createElement('div');
    editor.innerHTML = editorDOM.innerHTML;
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
        files.push(thumbnailFile);
        //tạo các promise gửi mỗi ảnh đến server
        const uploadPromises = sendFileToUrl(files, 'http://localhost:3400/uploadtocloud');
        //và xử lý chúng bất đồng bộ
        return Promise.all(uploadPromises);
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
        return axios.post('http://localhost:3400/posts/create', data);
      })
      .then(async (response) => {
        console.log('res: ', response.data);
        setIsUploadingImageFile(false);
      })
      .catch((error) => {
        alert('Server không phản hồi. Vui lòng thử lại sau');
        setIsUploadingImageFile(false);
      });
  };
  return (
    <>
      {/* <CreatePostContext.Provider /> */}
      <form className={s.createPost}>
        <section className={s.title}>
          <h3>TITLE</h3>
          <TextFormInput
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
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
            type="file"
            accept="image/png, image/gif, image/jpeg, image/webp, image/jpg"
          />
        </section>
        <section className={s.category}>
          <h3>Categories</h3>
          <CheckboxSelect optionDatas={categories} handleSelectedOptions={setSelectedCategories} />
        </section>
        <section className={s.hashtag}>
          <h3>hashtags</h3>
        </section>
        <Editor />
      </form>
      <div className={s.buttons}>
        {/* <SecondaryButton onClick={handlePreview}>Preview</SecondaryButton> */}
        <SecondaryButton
          onClick={() => {
            setIsPreviewing(true);
          }}
        >
          Preview
        </SecondaryButton>
        <PrimaryButton onClick={handleSend}>POST</PrimaryButton>
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
    </>
  );
}

export default WritePost;
