import { createSlice } from '@reduxjs/toolkit';

const categoriSlice = createSlice({
  name: 'category',
  initialState: {
    Categories: [],
  },
  reducers: {
    setCategory(state, action) {
      return { ...state, Categories: action.payload };
    },
    editCategory(state, action) {
      return { ...state, Categories: action.payload };
    },
  },
});

const { actions, reducer } = categoriSlice;
export const { setCategory } = actions;
export default reducer;

// export function add(todo){
//     return function asd(dispatch,getState){
//     }
// }
