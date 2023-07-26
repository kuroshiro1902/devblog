import clsx from 'clsx';
import s from './SecondaryButton.module.scss';
function SecondaryButton({ children, title, rounded, disabled, className, circle, onClick, type = 'button' }) {
  return (
    <button
      onClick={onClick}
      title={title}
      className={
        clsx(s.button, 'move-up', { rounded: rounded }, { [s.circle]: circle }, { [s.disabled]: disabled }) +
        ' ' +
        className
      }
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
