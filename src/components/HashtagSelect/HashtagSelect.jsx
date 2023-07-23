import { memo, useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import findIndexByObject from '../../utils/find/findIndexByObject';
import host from '../../host.config';
import { FaAngleDown } from 'react-icons/fa';
import s from './HashtagSelect.module.scss';
const setHide = (ref) => {
  ref.current.classList.remove(s.show);
};
const setShow = (ref) => {
  ref.current.classList.add(s.show);
};
function HashtagSelect({ handleSelectedOptions = () => {}, name, required = false }) {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const dropdownRef = useRef();
  const handleFocus = (e) => {
    e.stopPropagation();
    setHide(dropdownRef);
  };
  const searchHashtags = async (searchValue) => {
    if (searchValue.trim() !== '') {
      try {
        const response = await axios.get(`${host}/hashtags?search=${searchValue}`);
        setOptions(response.data);
      } catch (error) {
        setOptions([]);
        console.warn(err);
      }
    } else setOptions([]);
  };
  const handleSelected = useCallback((selectedOptions, option) => {
    findIndexByObject(selectedOptions, option) === -1 ? setSelectedOptions((prev) => [...prev, option]) : null;
  }, []);
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
  useEffect(() => {
    searchHashtags(searchValue);
  }, [searchValue]);
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
          {options.length > 0
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
