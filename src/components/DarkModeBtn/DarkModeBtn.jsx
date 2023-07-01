import React, { useState } from 'react';
import st from './DarkModeBtn.module.scss';
export default function DarkModeBtn() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <label htmlFor="toggleInput" className={st.toggle} onClick={toggleDarkMode}>
            <input type="checkbox" id="toggleInput" className={st.toggleInput} defaultChecked={isDarkMode} />
            <div className={st.toggleBar}>
                <div className={st.toggleSpin}></div>
            </div>
        </label>
    );
}
