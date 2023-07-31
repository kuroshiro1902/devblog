import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import reduceImageFromBase64 from '../../utils/images/reduceImageFromBase64';
import 'react-quill/dist/quill.snow.css';
import './Editor.scss';

let editor;
function reduceImageSize(editor) {
  const images = editor.querySelectorAll('img');
  images.forEach((img, index) => {
    const src = img.getAttribute('src');
    let reduceImage;
    if (src.startsWith('data:image')) {
      reduceImage = reduceImageFromBase64(src, `editorImage${index}`);
    } else {
      reduceImage = { file: null, src: src };
    }
    img.src = reduceImage.src;
  });
}
const Editor = () => {
  const [content, setContent] = useState('');
  const handleChange = (value) => {
    setContent(value);
  };
  useEffect(() => {
    editor = document.getElementsByClassName('ql-editor')[0];
  }, []);
  useEffect(() => {
    reduceImageSize(editor);
  }, [content]);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'list', 'bullet', 'link', 'image'];
  return (
    <div id="editor">
      <ReactQuill value={content} onChange={handleChange} modules={modules} formats={formats} />
    </div>
  );
};

export default Editor;
