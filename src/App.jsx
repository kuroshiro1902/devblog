import './App.css';
import { PostCard, Slider, TopicCard } from './components';
import { Footer, Header } from './public';

function App() {
    return (
        <div id="dark" className='mode'>
            <Header />
            <div id='container'>
                <div id="testScroll" style={{ height: '2000px' }}>
                    <div style={{height: '180px', width:'50%', padding: '1rem'}}>
                        <Slider slides={[<TopicCard />,<TopicCard />,<TopicCard />,<TopicCard />,<TopicCard />,<TopicCard />, ]} />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default App;
