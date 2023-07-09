import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Footer, Header, PostDetail, Posts } from './public';
import Home from './public/Home/Home';
import Editor from './private/Editor/Editor';

function App() {
    return (
        <div id="dark" className="mode">
            <Router>
                {/* <Header /> */}
                <div id="container">
                    <Routes>
                        <Route path="/editor" element={<Editor />} />
                        <Route path="/posts/:slug" element={<PostDetail />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
