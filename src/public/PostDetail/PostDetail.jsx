import { useParams } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import s from './PostDetail.module.scss';
import g from '../../style.module.scss';
import clsx from 'clsx';
import useGetData from '../../hooks/useGetData';
import host from '../../host.config';
import { useEffect, useRef } from 'react';
import { Heading, RelatedPosts, Comments } from './Sections';
import formatISODateToDate from '../../utils/formatISODateToDate';
function PostDetail() {
  const contentRef = useRef();
  const paths = [
    { name: 'Home', slug: '/' },
    { name: 'Posts', slug: '/posts' },
  ];
  const { slug: _id } = useParams();
  const {
    data: post,
    isLoading,
    isError,
  } = useGetData([`post ${_id}`], { url: `${host}/posts/${_id}` }, { staleTime: 1 * 60 * 1000, retry: 2 });
  useEffect(() => {
    if (contentRef.current) contentRef.current.innerHTML = post?.content;
  }, [post]);
  if (isError)
    return (
      <div className={s.postDetail}>
        <div className={s.breadCrumb}>
          <BreadCrumb path={paths} target={post?.title} />
        </div>
        <h1 style={{ paddingTop: '2.5rem' }}>Cannot get the post now :(</h1>
      </div>
    );
  return (
    <div className={s.postDetail}>
      <div className={s.breadCrumb}>
        <BreadCrumb path={paths} target={post?.title} />
      </div>
      {isLoading ? (
        <h1 style={{ paddingTop: '2.5rem' }}>Loading...</h1>
      ) : (
        <>
          <Heading title={post?.title} author={post?.author} createdAt={formatISODateToDate(post?.createdAt)} />
          <main className={clsx(s.main, g.flex)}>
            <div>
              <div className={clsx(s.content, 'ql-editor')} ref={contentRef}></div>
              <Comments />
            </div>
            <RelatedPosts />
          </main>
        </>
      )}
    </div>
  );
}

export default PostDetail;
