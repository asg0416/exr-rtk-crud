import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postList: [],
  onePost: {},
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getAllPost: () => {},
    getOnePost: () => {},
    createPost: () => {},
    updatePost: () => {},
    deletePost: () => {},
  },
});

export const { getAllPost, getOnePost, createPost, updatePost, deletePost } =
  postSlice.actions;
export default postSlice.reducer;
