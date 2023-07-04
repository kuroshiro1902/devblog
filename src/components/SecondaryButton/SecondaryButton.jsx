import clsx from 'clsx';
import s from './SecondaryButton.module.scss';
function SecondaryButton({ children, title, rounded, disabled, className }) {
    return (
        <button
            title={title}
            className={clsx(s.button, 'move-up', { rounded: rounded }, { [s.disabled]: disabled }) + ' ' + className}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default SecondaryButton;
