import { useEffect, useRef, useState } from 'react';
import s from './CheckboxSelect.module.scss';
import findObjectsByKeyword from '../../utils/find/FindObjectsByKeyword';
const setHide = (ref) => {
  ref.current.classList.remove(s.show);
};
const setShow = (ref) => {
  ref.current.classList.add(s.show);
};
const getSelectedOptions = (options) => {};
function CheckboxSelect({ optionDatas = [], handleSelectedOptions = () => {} }) {
  const [options, setOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [displayOptions, setDisplayOptions] = useState([]);
  useEffect(() => {
    const _options = optionDatas.map((optionData) => {
      return { ...optionData, selected: false };
    });
    setOptions(_options);
    setDisplayOptions(_options);
  }, [optionDatas]);
  const dropdownRef = useRef();
  useEffect(() => {
    document.body.onclick = () => {
      setHide(dropdownRef);
    };
  }, []);
  const handleFocus = (e) => {
    e.stopPropagation();
    setHide(dropdownRef);
  };
  const handleSearch = (e) => {
    const value = e.target.value;
    setDisplayOptions(findObjectsByKeyword(options, value));
  };
  const handleSelected = (e) => {
    const value = e.target.value;
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
    setSelectedOptions(_selectedOptions);
    handleSelectedOptions(_selectedOptions);
  };

  return (
    <div onClick={handleFocus}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          dropdownRef.current.classList.toggle(s.show);
        }}
        className={s.display}
      >
        {selectedOptions.length > 0
          ? selectedOptions.map((chosenOption, index) => (
              <span className={s.chosen} key={index}>
                {chosenOption.name}
              </span>
            ))
          : '--Select some options--'}
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
                      onClick={handleSelected}
                      value={option._id}
                      checked={option.selected}
                      onChange={(e) => {
                        e.target.checked = option.selected;
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

export default CheckboxSelect;
