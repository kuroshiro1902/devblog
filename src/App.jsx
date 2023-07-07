import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { BlockItem, PostCard, SecondaryButton, Slider, TopicCard } from './components';
import { Footer, Header, PostDetail, Posts } from './public';
import Home from './public/Home/Home';

function App() {
    return (
        <div id="dark" className="mode">
            <Router>
                <Header />
                <div id="container">
                    <Routes>
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
