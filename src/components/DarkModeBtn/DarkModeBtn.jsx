import React, { useEffect, useState } from 'react';
import st from './DarkModeBtn.module.scss';
export default function DarkModeBtn() {
  const [modeElement, setModeElement] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('mode') === 'light' ? false : true);
  useEffect(() => {
    const modeCtn = document.querySelector('.mode');
    modeCtn.id = localStorage.getItem('mode');
    setModeElement(modeCtn);
  }, []);
  useEffect(() => {
    if (modeElement) {
      modeElement.id = isDarkMode ? 'dark' : 'light';
      localStorage.setItem('mode', modeElement.id);
    }
  }, [isDarkMode]);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('mode', !isDarkMode);
  };
  return (
    <label htmlFor="toggleInput" className={st.toggle}>
      <input
        type="checkbox"
        id="toggleInput"
        className={st.toggleInput}
        defaultChecked={isDarkMode}
        onClick={toggleDarkMode}
      />
      {/* 123 */}
      <div className={st.toggleBar}>
        <div className={st.toggleSpin}></div>
      </div>
    </label>
  );
}
