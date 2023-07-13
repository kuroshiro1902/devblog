import { Author } from "../../components";
import { useRef, useEffect } from "react";
import clsx from "clsx";
import s from "./CreatePost.module.scss";
import g from "../../style.module.scss";
function Preview({ content = "content" }) {
  const contentRef = useRef();
  useEffect(() => {
    contentRef.current.innerHTML = content;
  }, []);
  return (
    <div className={s.preview}>
      <div className={clsx(s.heading, g.flexCol)}>
        <h1 className={s.title}>
          Five places must visit in turkey to relax in the winter season
        </h1>
        <Author />
      </div>
      <main className={clsx(s.main, g.flex)}>
        <div className={clsx(g.content, s.content)} ref={contentRef}></div>
      </main>
    </div>
  );
}

export default Preview;
