import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Footer, Header } from './public';
import { Provider } from 'react-redux';
import store from './store/store';
const queryClient = new QueryClient();
import Routes from './routes/Routes';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
function App() {
  return (
    <Provider store={store}>
      <div id="dark" className="mode">
        <QueryClientProvider client={queryClient}>
          <Router>
            <Header />
            <div id="container">
              <Routes />
            </div>
            <Footer />
          </Router>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </div>
    </Provider>
  );
}

export default App;
