import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Overlay, TextFormInput, PrimaryButton } from '../../components';
import s from './Category.module.scss';
import { setCategory } from '../../store/slice/categoriSlice';
import AddForm from './AddForm';

export default function AddCategory() {
  const dispatch = useDispatch();

  const [editData, setEditData] = useState(null);
  const [isShowForm, setIsShowForm] = useState(false);
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
      });
  };

  useEffect(() => {
    console.log(1);
    getCategory();
  }, []);
  const handleEditClick = (category) => {
    setEditData({ ...category });
    setIsShowForm(true);
  };
  const handleCreateClick = () => {
    setEditData(null);
    setIsShowForm(true);
  };
  const closeCreate = () => {
    setIsShowForm(false);
  };

  const deleteCategory = (id) => {
    fetch(`http://localhost:3400/admin/delete/categoy/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
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
                <button onClick={() => handleEditClick(item)}>Sửa</button>

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
      <PrimaryButton children="Thêm Categogy mới" onClick={handleCreateClick} />
      {isShowForm && <AddForm closeCreate={closeCreate} data={editData} />}
    </div>
  );
}
