import { Routes as ReactRoutes, Route } from 'react-router-dom';
import { Home, Posts, PostDetail, Login, Signup, Admin } from '../public';
import { CreatePost } from '../private';
import { Category } from '../components';
function Routes() {
  return (
    <ReactRoutes>
      <Route path="/admin/category" element={<Category />} />
      <Route path="/posts/create" element={<CreatePost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/posts/:slug" element={<PostDetail />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/admin" element={<Admin />} />

      <Route path="/" element={<Home />} />
    </ReactRoutes>
  );
}

export default Routes;
