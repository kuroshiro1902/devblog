import clsx from 'clsx';
import s from './TextFormInput.module.scss';
function TextFormInput({
  placeholder = 'Enter your name',
  icon,
  type = 'text',
  name,
  required = true,
  className,
  value,
  style,
  onChange = () => {},
}) {
  return (
    <div className={clsx(s.inputCtn, className)} style={style}>
      {icon}
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        autoComplete={'new-password'}
      />
    </div>
  );
}

export default TextFormInput;
