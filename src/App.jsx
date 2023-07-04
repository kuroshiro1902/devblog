import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { BlockItem, PostCard, SecondaryButton, Slider, TopicCard } from './components';
import { Footer, Header, Posts } from './public';
import Home from './public/Home/Home';

function App() {
    return (
        <div id="dark" className="mode">
        <Router>
            <Header />
                <Link to='/posts'>go to post page</Link>
                <Routes>
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/' element={<Home/>} />
                </Routes>
        </Router>
            </div>
    );
}

export default App;
