import s from './TextFormInput.module.scss'
function TextFormInput({placeholder='Enter your name'}) {
    return ( 
        <div className={s.inputCtn}>
            <input type='text' placeholder={placeholder} />
        </div>
     );
}

export default TextFormInput;