import { useState } from 'react';
import findIndexByObject from '../../utils/findIndexByObject';
import s from './CheckboxSelect.module.scss';
const _options = [
    { id: 'id1', value: 'value1' },
    { id: 'id2', value: 'value2' },
    { id: 'id3', value: 'value3' },
];
function CheckboxSelect() {
    const [isFocus, setIsFocus] = useState(false);
    const [options, setOptions] = useState([..._options]);
    const [chosenOptions, setChosenOptions] = useState([]);
    document.body.onclick = () => {
        setIsFocus(false);
    };
    const handleFocus = (e) => {
        e.stopPropagation();
        setIsFocus(true);
    };
    const handleChosen = (e) => {
        const chosenId = e.target.value;
        //neu duoc chon
        if (e.target.checked) {
            //tim index cua object duoc chon trong mang lay tu db
            const i = findIndexByObject(_options, { id: chosenId });
            setChosenOptions([...chosenOptions, _options[i]]);
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
                    setIsFocus(!isFocus);
                }}
                className={s.display}
            >
                {chosenOptions.length > 0
                    ? chosenOptions.map((chosenOption, index) => <span key={index}>{chosenOption.value}</span>)
                    : '--Select some options--'}
            </div>
            {isFocus && (
                <div className={s.dropdown}>
                    <input className={s.search} spellCheck={false} placeholder="Search" />
                    <ul className={s.optionlist}>
                        {options.map((option, index) => {
                            return (
                                <li key={index}>
                                    <input
                                        id={`option${index}`}
                                        type="checkbox"
                                        onClick={handleChosen}
                                        value={option.id}
                                    />
                                    <label htmlFor={`option${index}`}>{option.value}</label>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CheckboxSelect;
