import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
  name: 'post',
  initialState: {
    hotPosts: [],
    newPosts: [],
    editorsChoicePosts: [],
  },
  reducers: {
    setHotPosts: (state, action) => {
      state.hotPosts = action.payload;
    },
    setNewPosts: (state, action) => {
      state.newPosts = action.payload;
    },
    setEditorsChoicePosts: (state, action) => {
      state.editorsChoicePosts = action.payload;
    },
  },
});

export const { setHotPosts, setNewPosts, setEditorsChoicePosts } = postSlice.actions;
export default postSlice.reducer;
