import { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import reduceImageFromBase64 from '../../utils/reduceImageFromBase64';
import 'react-quill/dist/quill.snow.css';
import './Editor.scss';

function reduceImageSize(editor) {
  const images = editor.querySelectorAll('img');
  images.forEach((img, index) => {
    const src = img.getAttribute('src');
    if (!src.startsWith('blob')) {
      const reduceImage = reduceImageFromBase64(src, `editorImage${index}`);
      img.src = reduceImage.src;
    }
  });
}
const Editor = () => {
  const [content, setContent] = useState('');
  const handleChange = (value) => {
    setContent(value);
  };
  useEffect(() => {
    const editor = document.querySelector('.ql-editor');
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
