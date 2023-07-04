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
                
                <Routes>
                    <Route path='/' element={<Home/>}/>
                </Routes>
                <Footer/>
            </Router>
            
        </div>
    );
}

export default App;
