import { useRef } from 'react';
import findIndexByObject from '../../utils/findIndexByObject';
import s from './CheckboxSelect.module.scss';
const setHide = (ref) => {
    ref.current.classList.remove(s.show);
};
const setShow = (ref) => {
    ref.current.classList.add(s.show);
};
function CheckboxSelect({ options = [], chosenOptions = [], setChosenOptions = () => {} }) {
    const dropdownRef = useRef();
    console.log(chosenOptions);
    document.body.onclick = () => {
        setHide(dropdownRef);
    };
    const handleFocus = (e) => {
        e.stopPropagation();
        setHide(dropdownRef);
    };
    const handleChosen = (e) => {
        const chosenId = e.target.value;
        //neu duoc chon
        if (e.target.checked) {
            //tim index cua object duoc chon trong mang lay tu db
            const i = findIndexByObject(options, { id: chosenId });
            setChosenOptions([...chosenOptions, options[i]]);
        }
        //neu bo chon
        else {
            //tim index cua object bi bo chon trong mang state
            const i = findIndexByObject(chosenOptions, { id: chosenId });
            setChosenOptions(chosenOptions.slice(0, i).concat(chosenOptions.slice(i + 1)));
        }
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
                {chosenOptions.length > 0
                    ? chosenOptions.map((chosenOption, index) => (
                          <span className={s.chosen} key={index}>
                              {chosenOption.value}
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
                <input className={s.search} spellCheck={false} placeholder="Search" />
                <ul className={s.optionlist}>
                    {options.map((option, index) => {
                        return (
                            <li key={index}>
                                <input id={`option${index}`} type="checkbox" onClick={handleChosen} value={option.id} />
                                <label htmlFor={`option${index}`}>{option.value}</label>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default CheckboxSelect;
