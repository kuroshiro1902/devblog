import s from './PrimaryButton.module.scss'
function PrimaryButton({children}) {
    return ( 
        <button className={s.button}>{children}</button>
     );
}

export default PrimaryButton;