import './App.css';
import { BlockItem, PostCard, SecondaryButton, Slider, TopicCard } from './components';
import { Footer, Header } from './public';

function App() {
    return (
        <div id="dark" className="mode">
            <Header />
            <div style={{ height: '1000px', display: 'flex' }}>
                <div style={{ width: '40%', marginLeft: '20px' }}>
                    <BlockItem />
                    <BlockItem />
                    <BlockItem />
                </div>
                <div style={{ width: '30%', display: 'flex' }}>456</div>
            </div>
            <div id="container">
                <Footer />
            </div>
        </div>
    );
}

export default App;
