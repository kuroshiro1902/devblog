import clsx from 'clsx';
import s from './PrimaryButton.module.scss'
function PrimaryButton({children, title, rounded, disabled, circle}) {
    return ( 
        <button 
        title={title}
        className={clsx(s.button,'move-up', {'rounded': rounded }, {[s.circle]: circle}, {[s.disabled]: disabled })} 
        disabled={disabled}
        >
            {children}
        </button>
     );
}

export default PrimaryButton;