import clsx from 'clsx';
import s from './TextFormInput.module.scss';
function TextFormInput({
  placeholder = 'Enter your name',
  icon,
  type = 'text',
  name,
  className,
  style,
  value,
  setValue,
}) {
  return (
    <div className={clsx(s.inputCtn, className)} style={style}>
      {icon}
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        required
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default TextFormInput;
