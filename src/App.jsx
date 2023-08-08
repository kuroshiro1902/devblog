import { BrowserRouter as Router } from 'react-router-dom';
import { memo, useEffect } from 'react';
import { Footer, Header } from './public';
import PublicRoutes from './routes/PublicRoutes';
function App() {
  console.log('App rendered');
  // const loginWithToken = useLoginWithToken();
  // useEffect(() => {
  //   loginWithToken();
  // }, []);
  return (
    <div id="dark" className="mode">
      <Router>
        <Header />
        <div id="container">
          <PublicRoutes />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default memo(App);
