import { useRef, useState } from 'react';
import axios from 'axios';
import reduceImageFile from '../../utils/reduceImageFile';
import createImageFilesFromSrc from '../../utils/createImageFileFromSrc';
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
const _options = [
  { id: 'id1', value: 'value1' },
  { id: 'id2', value: 'value2' },
  { id: 'id3', value: 'value3' },
];
function createImageFilesFromSrcs(srcs = ['']) {
  return Promise.all(srcs.map((url, index) => createImageFilesFromSrc(url, `contentImage${index}`)));
}
function WritePost() {
  const [hashtagOptions, setHashtagOptions] = useState([..._options]);
  const [chosenHashtagOptions, setChosenHashtagOptions] = useState([]);
  const [thumbnailFile, setThumbnailFile] = useState('');
  const [content, setContent] = useState('');
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isUploadingImageFile, setIsUploadingImageFile] = useState(false);
  const thumbnailRef = useRef();
  const handleThumbnailImage = (e) => {
    const [file] = e.target.files;
    if (file) {
      reduceImageFile(file, setThumbnailFile);
    } else {
      setThumbnailFile('');
    }
  };
  const handlePreview = () => {
    setContent(document.querySelector('.ql-editor').innerHTML);
    setIsPreviewing(true);
  };
  const handleSend = () => {
    //tạo editor ảo
    const editor = document.createElement('div');
    editor.innerHTML = document.getElementsByClassName('ql-editor')[0].innerHTML;
    //lấy ra các thẻ img trong editor ảo
    const imgTags = editor.getElementsByTagName('img');
    //lấy ra các src và đổi src của img
    const imgSrcs = Array.from(imgTags).map((image, index) => {
      const src = image.src;
      image.setAttribute('src', `image${index}`);
      return src;
    });
    //tạo các ảnh từ các src
    createImageFilesFromSrcs(imgSrcs)
      .then((files) => {
        //tạo các promise gửi mỗi ảnh đến server
        const uploadPromises = files.map(async (file, index) => {
          const formData = new FormData();
          formData.append('image', file);
          try {
            const response = await axios.post('http://localhost:3400/uploadtocloud', formData);
            return { index, imageUrl: response.data.imageUrl };
          } catch (err) {
            console.error('Error uploading', err);
            throw err;
          }
        });
        //và xử lý chúng bất đồng bộ
        console.log('requests:', uploadPromises);
        return Promise.all(uploadPromises);
      })
      .then(async (responses) => {
        responses.forEach(({ index, imageUrl }) => {
          imgTags[index].setAttribute('src', imageUrl);
        });

        const content = editor.innerHTML;
        return axios.post('http://localhost:3400/posts/create', { content });
      })
      .then(async (response) => {
        console.log(response.data.content);
        setIsUploadingImageFile(false);
      })
      .catch((error) => {
        alert('Server không phản hồi. Vui lòng thử lại sau');
        setIsUploadingImageFile(false);
      });
  };
  return (
    <>
      <form className={s.createPost}>
        <section className={s.title}>
          <h3>TITLE</h3>
          <TextFormInput placeholder="Title" />
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
            accept="image/png, image/gif, image/jpeg, image/webp"
          />
        </section>
        <section className={s.category}>
          <h3>Categories</h3>
        </section>
        <section className={s.hashtag}>
          <h3>hashtags</h3>
          <CheckboxSelect
            options={hashtagOptions}
            chosenOptions={chosenHashtagOptions}
            setChosenOptions={setChosenHashtagOptions}
          />
        </section>
        <Editor />
      </form>
      <div className={s.buttons}>
        {/* <SecondaryButton onClick={handlePreview}>Preview</SecondaryButton> */}
        <SecondaryButton onClick={handlePreview}>Preview</SecondaryButton>
        <PrimaryButton
          onClick={() => {
            setIsUploadingImageFile(true);
            handleSend();
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
          content={content}
          handleClose={() => {
            setIsPreviewing(false);
          }}
        />
      )}
    </>
  );
}

export default WritePost;
