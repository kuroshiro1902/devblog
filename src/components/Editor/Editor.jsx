import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import base64ToFile from "../../utils/base64ToFile";

import "react-quill/dist/quill.snow.css";
import "./Editor.scss";
function changeSrcOfImage(editor) {
  const contentImages = editor.getElementsByTagName("img");
  // console.log(contentImages);
  return Array.from(contentImages).map((image, index) => {
    const file = base64ToFile(image.src, `image${index}`);
    image.src = URL.createObjectURL(file);
  });
}
const Editor = () => {
  const [content, setContent] = useState("");
  const [imageCount, setImageCount] = useState(0);
  const handleChange = (value) => {
    setContent(value);
  };
  useEffect(() => {
    const editor = document.querySelector(".ql-editor");
    const images = editor.querySelectorAll("img");
    if (images.length !== imageCount) {
      setImageCount(images.length);
    }
  }, [content]);
  useEffect(() => {
    // Giảm dung lượng ảnh trong nội dung sử dụng canvas
    const reduceImageSize = () => {
      const editor = document.querySelector(".ql-editor");

      const images = editor.querySelectorAll("img");
      images.forEach((img) => {
        const src = img.getAttribute("src");
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const MAX_WIDTH = 900; // Kích thước tối đa
        const MAX_HEIGHT = 600;
        let width = img.width;
        let height = img.height;

        // Điều chỉnh kích thước ảnh nếu vượt quá giới hạn
        if (width > MAX_WIDTH) {
          height = (MAX_WIDTH / width) * height;
          width = MAX_WIDTH;
        }
        if (height > MAX_HEIGHT) {
          width = (MAX_HEIGHT / height) * width;
          height = MAX_HEIGHT;
        }
        // Vẽ ảnh trên canvas với kích thước mới
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        // Lưu lại dưới dạng base64 với chất lượng mới
        const reducedBase64 = canvas.toDataURL("image/jpeg", 1);

        document
          .querySelector(`img[src='${src}']`)
          .setAttribute("src", reducedBase64);
      });
    };

    reduceImageSize();
  }, [imageCount]); //->>>>>>Thay đổi dependency gấp!!!!!!!!!!!!!!!!!!!!!!

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div id="editor">
      <ReactQuill
        value={content}
        onChange={handleChange}
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default Editor;
