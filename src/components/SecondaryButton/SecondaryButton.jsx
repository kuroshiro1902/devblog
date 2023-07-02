import clsx from 'clsx';
import s from './SecondaryButton.module.scss'
function SecondaryButton({children, title, rounded, disabled}) {
    return ( 
        <button 
        title={title}
        className={clsx(s.button, {'rounded': rounded }, {[s.disabled]: disabled })} 
        disabled={disabled}
        >
            {children}
        </button>
     );
}

export default SecondaryButton;