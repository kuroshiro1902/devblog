import { Routes as ReactRoutes, Route } from "react-router-dom";
import { Home, Posts, PostDetail, Login, Signup } from "../public";
import { CreatePost } from "../private";
function Routes() {
  return (
    <ReactRoutes>
      <Route path="/posts/create" element={<CreatePost />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/posts/:slug" element={<PostDetail />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/" element={<Home />} />
    </ReactRoutes>
  );
}

export default Routes;
