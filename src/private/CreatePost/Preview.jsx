import { Author, Overlay, PrimaryButton, SecondaryButton } from '../../components';
import { useRef, useEffect } from 'react';
import clsx from 'clsx';
import s from './CreatePost.module.scss';
import g from '../../style.module.scss';
function Preview({ content = 'content', handleClose }) {
  const contentRef = useRef();
  useEffect(() => {
    contentRef.current.innerHTML = content;
  }, []);
  return (
    <Overlay handleClose={handleClose}>
      <div
        className={s.preview}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={s.closeBtn}>
          <SecondaryButton onClick={handleClose}>X</SecondaryButton>
        </div>
        <div className={clsx(s.heading, g.flexCol)}>
          <h1 className={s.title}>Five places must visit in turkey to relax in the winter season</h1>
          <Author />
        </div>
        <main className={clsx(s.main)}>
          <div className={clsx(g.content, s.content, 'ql-editor')} ref={contentRef}></div>
        </main>
      </div>
    </Overlay>
  );
}

export default Preview;
