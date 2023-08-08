import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/categoriSlice';
import postReducer from './slice/postSlice';

const rootReducer = {
  category: categoryReducer,
  post: postReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
