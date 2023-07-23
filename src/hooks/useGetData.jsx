import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetData = (queryKey = ['data'], url = '', options = {}) => {
  return useQuery(
    [...queryKey],
    async () => {
      const response = await axios.get(url);
      return response.data;
    },
    { refetchOnMount: false, refetchOnWindowFocus: false, ...options },
  );
};

export default useGetData;
