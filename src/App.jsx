import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './public';

const queryClient = new QueryClient();
import Routes from './routes/Routes';
function App() {
  return (
    <div id="dark" className="mode">
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <div id="container">
            <Routes />
          </div>
          <Footer />
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
