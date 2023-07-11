import { useRef, useState } from 'react';
import { Editor, TextFormInput, CheckboxSelect } from '../../components';
import s from './WritePost.module.scss';
function WritePost() {
    const [thumbnailFile, setThumbnailFile] = useState('');
    const thumbnailRef = useRef();
    const handlePreviewImage = (e) => {
        const [file] = e.target.files;
        if (file) {
            setThumbnailFile(file);
        } else {
            setThumbnailFile('');
        }
    };
    return (
        <form className={s.writePost}>
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
                    onChange={handlePreviewImage}
                    type="file"
                    accept="image/png, image/gif, image/jpeg, image/webp"
                    value={thumbnailFile[0]}
                />
            </section>
            <section className={s.category}>
                <h3>Categories</h3>
                <select>
                    <option value="1">Category1</option>
                    <option value="2">Category2</option>
                    <option value="3">Category3</option>
                    <option value="4">Category4</option>
                </select>
            </section>
            <section className={s.hashtag}>
                <h3>hashtags</h3>
                <CheckboxSelect />
            </section>
            <Editor />
        </form>
    );
}

export default WritePost;
