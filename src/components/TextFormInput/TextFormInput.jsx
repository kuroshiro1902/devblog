import s from './TextFormInput.module.scss';
function TextFormInput({ placeholder = 'Enter your name', icon, type = 'text' }) {
    return (
        <div className={s.inputCtn}>
            {icon}
            <input placeholder={placeholder} type={type} required />
        </div>
    );
}

export default TextFormInput;
