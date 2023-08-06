import { memo, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes/Routes';
import { Footer, Header } from './public';
import './App.css';
import useLoginWithToken from './hooks/useLoginWithToken';
function App() {
  console.log('App rendered');
  const loginWithToken = useLoginWithToken();
  useEffect(() => {
    loginWithToken();
  }, []);
  return (
    <Router>
      <div id="dark" className="mode">
        <Header />
        <div id="container">
          <Routes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default memo(App);
