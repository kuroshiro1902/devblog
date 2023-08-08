import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Overlay, TextFormInput, PrimaryButton } from '../../components';
import s from './Category.module.scss';
import { setCategory } from '../../store/slice/categoriSlice';

export default function AddCategory() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [edit, setEdit] = useState(false);
  const [cid, setCid] = useState(null);
  // const [Cate, setCate] = useState(null);
  const formRef = useRef(null);
  const { Categories } = useSelector((state) => state.category);
  console.log('first', Categories);
  const getCategory = () => {
    fetch(`http://localhost:3400/admin/category`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setCategory(data));
        // setCate(data);
      });
  };

  useEffect(() => {
    console.log(1);
    getCategory();
  }, []);
  const handleEditClick = (category, id) => {
    setCid(id);
    setName(category.name);
    setSlug(category.slug);
    setEdit(true);
    formRef.current.style.display = 'block';
  };
  const handleCreateClick = () => {
    setName('');
    setSlug('');
    setEdit(false);
    formRef.current.style.display = 'block';
  };
  const closeCreate = () => {
    formRef.current.style.display = 'none';
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    closeCreate();
    if (edit) {
      console.log(name, slug);
      fetch(`http://localhost:3400/admin/edit/categoy/${cid}`, {
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

  const deleteCategory = (id) => {
    fetch(`http://localhost:3400/admin/delete/categoy/${id}`, {
      method: 'DELETE',
    })
      // .then((response) => {
      //   console.log('response', response);
      //   if (response.ok) {
      //     // getCategory();
      //     console.log(response);
      //     dispatch(setCategory(response.data));

      //     console.log('Bài viết đã được xoá thành công');
      //   } else {
      //     console.log('Không thể xoá bài viết');
      //   }
      // }
      // );
      .then((response) => response.json())
      .then((data) => {
        // getCategory();
        console.log('wsss', data);
        dispatch(setCategory(data));
        console.log(data);
      });
  };
  return (
    <div className={s.category}>
      <h2>Category</h2>
      <table className={s.table}>
        <thead>
          <tr>
            <th className={s.th}>#</th>
            <td className={s.td}>Name</td>
            <td className={s.td}>Slug</td>
            <td className={s.td}>click</td>
          </tr>
        </thead>
        <tbody>
          {Categories?.map((item, index) => (
            <tr key={index}>
              <th className={s.th}>{index + 1}</th>
              <td className={s.td}>{item.name}</td>
              <td className={s.td}>{item.slug}</td>

              <td className={s.td}>
                <button onClick={() => handleEditClick(item, item._id)}>Sửa</button>

                <button onClick={() => deleteCategory(item._id)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <PrimaryButton onClick={() => handleCreateClick()}>Thêm Categogy mới</PrimaryButton>
      <div className={s.create} ref={formRef}>
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
              <PrimaryButton>{edit ? 'edit' : 'create'}</PrimaryButton>
            </form>
          </div>
        </Overlay>
      </div>
    </div>
  );
}
