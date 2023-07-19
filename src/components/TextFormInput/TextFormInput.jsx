import clsx from 'clsx';
import s from './TextFormInput.module.scss';
function TextFormInput({
  placeholder = 'Enter your name',
  icon,
  type = 'text',
  name,
  required = true,
  className,
  style,
  onChange = () => {},
}) {
  return (
    <div className={clsx(s.inputCtn, className)} style={style}>
      {icon}
      <input onChange={onChange} placeholder={placeholder} type={type} name={name} required={required} />
    </div>
  );
}

export default TextFormInput;
