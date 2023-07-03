import './App.css';
import { Post, PostItem } from './components';
import { Footer, Header } from './public';

function App() {
    return (
        <div id="dark" className="mode">
            <Header />
            <div id="testScroll" style={{ height: '2000px', display: 'flex' }}>
                <div style={{ width: '70%', backgroundColor: 'red' }}>123</div>
                <div style={{ width: '30%' }}>
                    <Post title="Popular Posts">
                        <PostItem key={1} />
                        <PostItem key={2} />
                        <PostItem key={3} />
                    </Post>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
