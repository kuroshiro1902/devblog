import React, { useEffect, useState } from 'react';
import st from './DarkModeBtn.module.scss';
const mode = {
    true: 'dark',
    false: 'light'
}
export default function DarkModeBtn() {
    const darkMode = !localStorage.getItem('mode') ? true : localStorage.getItem('mode')
    const [isDarkMode, setIsDarkMode] = useState(darkMode);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('mode', !isDarkMode)
    };
    useEffect(()=>{
        const mode = document.querySelector('.mode')
        mode.id = mode[isDarkMode]
    },[isDarkMode])
    return (
        <label htmlFor="toggleInput" className={st.toggle}>
            <input type="checkbox" id="toggleInput" className={st.toggleInput} defaultChecked={isDarkMode} onClick={toggleDarkMode}/>
            <div className={st.toggleBar}>
                <div className={st.toggleSpin}></div>
            </div>
        </label>
    );
}
