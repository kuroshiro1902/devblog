import { memo, useCallback, useEffect, useRef, useState } from 'react';
// import axios from 'axios';
import useGetData from '../../hooks/useGetData';
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
  const { data } = useGetData('searchHashtags', `${host}/hashtags?search=${searchValue}`);
  console.log(data);
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
  const dropdownRef = useRef();
  const handleFocus = (e) => {
    e.stopPropagation();
    setHide(dropdownRef);
  };
  const handleSearch = async (e) => {
    try {
      const value = e.target.value;
      // const response = await axios.get(`${host}/hashtags`);
      // setOptions(response.data);
    } catch (error) {
      setOptions([]);
      setDisplayText('Error');
      console.warn(err);
    }
  };
  const handleSelected = useCallback((value, options) => {
    const optionsLength = options.length;
    for (let i = 0; i < optionsLength; i++) {
      //value của input được set bằng _id
      if (value === options[i]._id) {
        //đảo ngược giá trị selected của option trong mảng options ban đầu
        options[i].selected = !options[i].selected;
        break;
      }
    }
    //set các option đã select
    const _selectedOptions = options.filter((option) => {
      const isSelected = option.selected;
      return isSelected === true;
    });
    console.log('selected: ', _selectedOptions);
    setSelectedOptions(_selectedOptions);
    handleSelectedOptions(_selectedOptions);
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
                        checked={option.selected}
                        onChange={(e) => {
                          const value = e.target.value;
                          handleSelected(value, options);
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
