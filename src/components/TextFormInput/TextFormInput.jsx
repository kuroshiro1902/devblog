import clsx from 'clsx';
import s from './TextFormInput.module.scss';
function TextFormInput({
  placeholder = 'Enter your name',
  icon,
  type = 'text',
  name,
  className,
  style,
  onChange = () => {},
}) {
  return (
    <div className={clsx(s.inputCtn, className)} style={style}>
      {icon}
      <input onChange={onChange} placeholder={placeholder} type={type} name={name} required />
    </div>
  );
}

export default TextFormInput;
