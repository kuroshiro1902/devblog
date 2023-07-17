import { createContext, useEffect, useState } from 'react';
import { DataContext } from '../../contexts';
import useGetData from '../../hooks/useGetData';
const CreatePostContext = createContext();
let count = 0;
function CreatePostProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dataObj = useGetData('categories', 'http://localhost:3400/categories');
  if (dataObj.isLoading) console.log('is Loading');
  else if (dataObj.isError) console.log('is Error');
  return <CreatePostContext.Provider value={categories}>{children}</CreatePostContext.Provider>;
}

export default { Context: CreatePostContext, Provider: CreatePostProvider };
