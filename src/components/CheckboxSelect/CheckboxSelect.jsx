import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import s from './CheckboxSelect.module.scss';
import findObjectsByKeyword from '../../utils/find/FindObjectsByKeyword';
const setHide = (ref) => {
  ref.current.classList.remove(s.show);
};
const setShow = (ref) => {
  ref.current.classList.add(s.show);
};
const getSelectedOptions = (options) => {};
function CheckboxSelect({ optionDatas = [], handleSelectedOptions = () => {}, name, required = false }) {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [displayOptions, setDisplayOptions] = useState([]);
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
    const _options = optionDatas.map((optionData) => {
      return { ...optionData, selected: false };
    });
    setOptions(_options);
    setDisplayOptions(_options);
  }, [optionDatas]);
  const dropdownRef = useRef();
  const handleFocus = (e) => {
    e.stopPropagation();
    setHide(dropdownRef);
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setDisplayOptions(findObjectsByKeyword(options, value));
  };
  const handleSelected = useCallback(
    (value, options) => {
      const optionsLength = options.length;
      for (let i = 0; i < optionsLength; i++) {
        //value của input được set bằng _id
        if (value === options[i]._id) {
          options[i].selected = !options[i].selected;
          break;
        }
      }
      const _selectedOptions = options.filter((option) => {
        const isSelected = option.selected;
        return isSelected === true;
      });
      console.log('selected: ', _selectedOptions);
      setSelectedOptions(_selectedOptions);
      handleSelectedOptions(_selectedOptions);
    },
    [optionDatas],
  );
  console.log('render');
  return (
    <div onClick={handleFocus}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          dropdownRef.current.classList.toggle(s.show);
        }}
        className={s.display}
      >
        {selectedOptions.length > 0 ? (
          selectedOptions.map((chosenOption, index) => (
            <span className={s.chosen} key={index}>
              {chosenOption.name}
            </span>
          ))
        ) : (
          <span> --Select some options-- </span>
        )}
        <span style={{ float: 'right' }}>
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
        <input className={s.search} spellCheck={false} placeholder="Search" onChange={handleSearch} />
        <ul className={s.optionlist}>
          {displayOptions.length > 0
            ? displayOptions.map((option, index) => {
                return (
                  <li key={index}>
                    <input
                      id={`option${index}`}
                      type="checkbox"
                      // onClick={handleSelected}
                      name={name}
                      required={required}
                      value={option._id}
                      checked={option.selected}
                      onChange={(e) => {
                        const value = e.target.value;

                        handleSelected(value, options);
                      }}
                    />
                    <label htmlFor={`option${index}`}>{option.name}</label>
                  </li>
                );
              })
            : 'No option.'}
        </ul>
      </div>
    </div>
  );
}

export default memo(CheckboxSelect);
