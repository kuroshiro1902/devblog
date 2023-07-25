import { memo, useCallback, useEffect, useRef, useState } from 'react';
import findIndexByObject from '../../utils/find/findIndexByObject';
import host from '../../host.config';
import { FaAngleDown } from 'react-icons/fa';
import s from './HashtagSelect.module.scss';
import useGetData from '../../hooks/useGetData';
const setHide = (ref) => {
  ref.current.classList.remove(s.show);
};
const setShow = (ref) => {
  ref.current.classList.add(s.show);
};
function HashtagSelect({ handleSelectedOptions = () => {}, name, required = false }) {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const { data: options, isFetching } = useGetData(
    ['hashtags', searchValue],
    `${host}/hashtags?search=${searchValue}`,
    {
      staleTime: 2 * 60 * 1000,
      cacheTime: 5 * 60 * 1000,
    },
  );
  const dropdownRef = useRef();
  const handleFocus = (e) => {
    e.stopPropagation();
    setHide(dropdownRef);
  };
  //handler
  const handleSelected = useCallback((selectedOptions, option) => {
    const optionIndex = findIndexByObject(selectedOptions, option);
    const newSelectedOptions =
      optionIndex === -1
        ? //nếu chưa được chọn
          [...selectedOptions, option]
        : //nếu đã được chọn
          selectedOptions.filter((_, index) => index !== optionIndex);
    setSelectedOptions([...newSelectedOptions]);
    handleSelectedOptions([...newSelectedOptions]);
  }, []);
  //effect
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setHide(dropdownRef);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);
  console.log('render HashtagSelect');
  return (
    <div onClick={handleFocus}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          dropdownRef.current.classList.toggle(s.show);
        }}
        className={s.display}
      >
        <p>
          {selectedOptions.length > 0 ? (
            selectedOptions.map((chosenOption, index) => (
              <span className={s.chosen} key={index}>
                {chosenOption.name}
              </span>
            ))
          ) : (
            <span> --Select some options-- </span>
          )}
        </p>
        <span>
          <FaAngleDown style={{ height: 24 }} />
        </span>
      </div>
      <div
        className={s.dropdown}
        ref={dropdownRef}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input
          className={s.search}
          spellCheck={false}
          placeholder="Search"
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <ul className={s.optionlist}>
          {options?.length > 0
            ? options.map((option, index) => {
                return (
                  <li key={index}>
                    <label>
                      <input
                        id={`option${index}`}
                        type="checkbox"
                        name={name}
                        required={required}
                        value={option._id}
                        checked={findIndexByObject(selectedOptions, option) !== -1}
                        onChange={() => {
                          handleSelected(selectedOptions, option);
                        }}
                      />{' '}
                      {option.name}
                    </label>
                    <span className={s.count}>12</span>
                  </li>
                );
              })
            : 'No hashtags found'}
        </ul>
      </div>
    </div>
  );
}

export default memo(HashtagSelect);
