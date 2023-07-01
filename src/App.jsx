import './App.css';
import { Footer, Header } from './public';

function App() {
    return (
        <div id="dark">
            <Header />
            <div id="testScroll" style={{ height: '2000px' }}></div>
            <Footer />
        </div>
    );
}

export default App;
