import s from './Overlay.module.scss';
function Overlay({ children, handleClose = () => {} }) {
  return (
    <div onClick={handleClose} className={s.overlay}>
      {children}
    </div>
  );
}

export default Overlay;
