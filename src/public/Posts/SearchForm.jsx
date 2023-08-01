import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PrimaryButton, TextFormInput } from '../../components';
import s from './Posts.module.scss';

function SearchForm() {
  const [searchValue, setSearchValue] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search.trim());
  const handleSubmit = (e) => {
    e.preventDefault();
    // params.set('search', searchValue.trim());
    // navigate(`?${params.toString()}`);
    navigate(`?search=${searchValue.trim()}`);
  };
  useEffect(() => {
    const URLSearchValue = params.get('search');
    setSearchValue(URLSearchValue ? URLSearchValue : '');
    //[location.search] : set giá trị cho ô input khi lần đầu vào trang hoặc bấm nút back / forward
  }, [location.search]);
  return (
    <form className={s.search} onSubmit={handleSubmit}>
      <TextFormInput
        placeholder="Seaching by title, content, author, ..."
        onChange={setSearchValue}
        value={searchValue}
        required={false}
      ></TextFormInput>
      <i className={s.notice}>*Dữ liệu sẽ được cập nhật mỗi 1 phút.</i>
      <div style={{ marginTop: '1.5rem' }}>
        <PrimaryButton>Search</PrimaryButton>
      </div>
    </form>
  );
}

export default SearchForm;
