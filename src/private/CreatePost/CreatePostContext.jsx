import { createContext, useEffect, useState } from 'react';
import host from '../../host.config';
import useGetData from '../../hooks/useGetData';
const CreatePostContext = createContext();
function CreatePostProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const dataObj = useGetData('categories', `${host}/categories`);
  if (dataObj.isLoading) console.log('is Loading');
  else if (dataObj.isError) console.log('is Error');
  return <CreatePostContext.Provider value={categories}>{children}</CreatePostContext.Provider>;
}

export default { Context: CreatePostContext, Provider: CreatePostProvider };
