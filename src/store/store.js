import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './slice/categoriSlice';

const rootReducer = {
  category: categoryReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
