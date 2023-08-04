import clsx from 'clsx';
import s from './TextFormInputForward.module.scss';
import { forwardRef, memo, useId } from 'react';
function TextFormInputForward(
  {
    placeholder = 'Enter your name',
    icon,
    type = 'text',
    name,
    required = true,
    className,
    value,
    style,
    onChange = () => {},
  },
  ref,
) {
  const id = useId();
  return (
    <div className={clsx(s.inputCtn, className)} style={style}>
      <label htmlFor={id} className="">
        {icon}
        <small> {placeholder}</small>
      </label>
      <input
        ref={ref}
        id={id}
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

export default memo(forwardRef(TextFormInputForward));
