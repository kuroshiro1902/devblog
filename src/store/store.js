import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/categoriSlice';
import authReducer from './slice/authSlice';

const rootReducer = {
  category: categoryReducer,
  auth: authReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
