import clsx from 'clsx';
import s from './TextFormInputForward.module.scss';
import { forwardRef, memo } from 'react';
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
  return (
    <div className={clsx(s.inputCtn, className)} style={style}>
      {icon}
      <input
        ref={ref}
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
