import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/categoriSlice';
import postReducer from './slice/postSlice';
import authReducer from './slice/authSlice';

const rootReducer = {
  category: categoryReducer,
  auth: authReducer,
  post: postReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
