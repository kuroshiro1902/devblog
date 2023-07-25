import React, { useState } from 'react';
import s from './Category.module.scss';
import { Overlay, PrimaryButton, TextFormInput } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../../store/slice/categoriSlice';
export default function AddForm({ edit, closeCreate, data }) {
  //   console.log('data', data);
  const [name, setName] = useState(data ? data.name : '');
  const [slug, setSlug] = useState(data ? data.slug : '');
  const dispatch = useDispatch();
  const { Categories } = useSelector((state) => state.category);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    closeCreate();
    if (data) {
      console.log(name, slug);
      fetch(`http://localhost:3400/admin/edit/categoy/${data._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, slug }),
      })
        .then((response) => response.json())
        .then((data) => {
          // getCategory();
          console.log(data);
          dispatch(setCategory(data));
        });
    } else {
      console.log(name, slug);
      fetch('http://localhost:3400/admin/create/category', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, slug }),
      })
        .then((response) => response.json())
        .then((data) => {
          // getCategory();
          dispatch(setCategory([...Categories, data]));
          console.log(data);
        });
    }
  };
  return (
    <div className={s.create}>
      {/* <div className={s.overlay} onClick={closeCreate}></div> */}
      <Overlay handleClose={closeCreate}>
        <div className={s.form} onClick={(e) => e.stopPropagation()}>
          <div className={s.header}>
            <h3>{edit ? 'Sửa danh mục' : 'Thêm danh mục'}</h3>
            <div className={s.close} onClick={closeCreate}>
              X
            </div>
          </div>
          <form onSubmit={handleFormSubmit}>
            <TextFormInput placeholder="Nhập tên" value={name} onChange={setName} />
            <TextFormInput placeholder="Nhập slug" value={slug} onChange={setSlug} />
            <br />
            <PrimaryButton children={data ? 'edit' : 'create'} />
          </form>
        </div>
      </Overlay>
    </div>
  );
}
