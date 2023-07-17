import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useGetData = (queryKey = 'data', url = '') => {
  const { data, error, isLoading, isError } = useQuery(
    [queryKey],
    async () => {
      const response = await axios.get(url);
      return response.data;
    },
    { refetchOnMount: false, refetchOnWindowFocus: false },
  );

  return { data, error, isError, isLoading };
};

export default useGetData;
