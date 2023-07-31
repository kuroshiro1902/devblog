import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetData = (queryKey = ['data'], url = '', options = {}) => {
  return useQuery(
    [...queryKey],
    async () => {
      try {
        const response = await axios.get(url);
        return response.data;
      } catch (error) {
        throw new Error(error.message);
      }
    },
    { refetchOnMount: false, refetchOnWindowFocus: false, ...options },
  );
};

export default useGetData;
