import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import { Footer, Header } from './public';

import Routes from './routes/Routes';

function App() {
    return (
        <div id="dark" className="mode">
            <Router>
                <Header />
                <div id="container">
                    <Routes />
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
