/* eslint-disable react/prop-types */
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import store from './store/store';
const queryClient = new QueryClient();

function ContextProviders({ children }) {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default ContextProviders;
