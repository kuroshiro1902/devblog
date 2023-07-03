import './App.css';
import { PostCard, Slider, TopicCard } from './components';
import { Footer, Header } from './public';

function App() {
    return (
        <div id="dark" className='mode'>
            <Header />
            <div id='container'>
                <Footer />
            </div>
        </div>
    );
}

export default App;
