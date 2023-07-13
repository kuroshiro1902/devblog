import { useRef, useState } from "react";
import axios from "axios";
import resizeImage from "../../utils/resizeImage";
import React from "react";
import {
  Editor,
  TextFormInput,
  CheckboxSelect,
  PrimaryButton,
} from "../../components";
import s from "./CreatePost.module.scss";
import base64ToFile from "../../utils/base64ToFile";
import Preview from "./Preview";
const _options = [
  { id: "id1", value: "value1" },
  { id: "id2", value: "value2" },
  { id: "id3", value: "value3" },
];
function getAllImagesInEditorAndConvertToFiles(editor) {
  const contentImages = editor.getElementsByTagName("img");
  // console.log(contentImages);
  return Array.from(contentImages).map((image, index) => {
    const file = base64ToFile(image.src, `image${index}`);
    console.log(URL.createObjectURL(file));
    image.src = URL.createObjectURL(file);
    console.log(image);
    return file;
  });
}
function WritePost() {
  const [hashtagOptions, setHashtagOptions] = useState([..._options]);
  const [chosenHashtagOptions, setChosenHashtagOptions] = useState([]);
  const [thumbnailFile, setThumbnailFile] = useState("");
  const [content, setContent] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const thumbnailRef = useRef();
  const handleThumbnailImage = (e) => {
    const [file] = e.target.files;
    if (file) {
      resizeImage(file, setThumbnailFile);
    } else {
      setThumbnailFile("");
    }
  };
  // const handleSendThubnail = async () => {
  //   const formData = new FormData();
  //   formData.append("image", thumbnailFile);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3400/uploadtocloud",
  //       formData,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );

  //     console.log("Image uploaded successfully!", response.data.imageUrl);
  //   } catch (error) {
  //     console.error("Error uploading image:", error);
  //   }
  // };
  const fake = React.createElement("div", null, "<h1>ABC</h1>");
  const contentPreprocess = (content) => {
    // const virtualEditor = document.createElement("div");
    // virtualEditor.innerHTML = document.querySelector(".ql-editor").innerHTML;
    const contentImages = getAllImagesInEditorAndConvertToFiles(
      document.querySelector(".ql-editor")
    );
    setContent(document.querySelector(".ql-editor").innerHTML);
    setIsPreview(true);
  };
  const handlePreprocess = () => {};
  // const handleSend = async () => {
  //   try {
  //     const response = await axios.post("http://localhost:3400/posts/create", {
  //       content,
  //     });

  //     console.log("Uploaded successfully!");
  //   } catch (error) {
  //     console.error("Error uploading");
  //   }
  // };
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
            <div className={s.preview}>
              <img src={URL.createObjectURL(thumbnailFile)} />
              <span
                className={s.close}
                title="Delete thumbnail"
                onClick={() => {
                  setThumbnailFile("");
                  thumbnailRef.current.value = "";
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
      <PrimaryButton onClick={contentPreprocess}>
        Send Thumbnail img to db
      </PrimaryButton>
      {isPreview && (
        <div className={s.previewCtn}>
          <Preview content={content} />
        </div>
      )}
    </>
  );
}

export default WritePost;
