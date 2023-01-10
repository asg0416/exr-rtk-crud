import { createApi } from "@reduxjs/toolkit/query/react";
import instance from "../../shares/Api";

const axiosBaseQuery =
  () =>
  async ({ url, method, data, params }) => {
    try {
      const result = await instance[`${method}`](url, data, params);
      return { data: result.data };
    } catch (err) {
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data?.message || err.message,
        },
      };
    }
  };

const postApi = (build) => ({
  getAllPost: build.query({
    query: () => ({ url: "/posts", method: "get" }),
    providesTags: (result, error, arg) => result.map((data) => ({ type: "Post", id: data.id }))
  }),
  getOnePost: build.query({
    query: (id) => ({ url: `/posts/${id}`, method: "get" }),
    providesTags: (result, error, arg) => [{ type: "Post", id: arg }],
  }),
  setPost: build.mutation({
    query: (data) => ({ url: "/posts", method: "post", data: { ...data } }),
  }),
  editPost: build.mutation({
    query: ({ id, data }) => ({
      url: `/posts/${id}`,
      method: "patch",
      data: { ...data },
    }),
    invalidatesTags: (result, error, { id }) => [{ type: "Post", id }],
  }),
  deletePost: build.mutation({
    query: (id) => ({ url: `/posts/${id}`, method: "delete" }),
  }),
});

const commentApi = (build) => ({
  getAllComment: build.query({
    query: (postId) => ({ url: `/comments?postId=${postId}`, method: "get" }),
    providesTags: (result, error, arg) => [{ type: "Comment", id: arg }],
  }),
  getOneComment: build.query({
    query: (id) => ({ url: `/comments/${id}`, method: "get" }),
  }),
  setComment: build.mutation({
    query: (data) => ({ url: "/comments", method: "post", data: { ...data } }),
    invalidatesTags: (result, error, { postId }) => [
      { type: "Comment", id: postId },
    ],
  }),
  editComment: build.mutation({
    query: ({ id, data }) => ({
      url: `/comments/${id}`,
      method: "patch",
      data: { ...data },
    }),
  }),
  deleteComment: build.mutation({
    query: (id, postId) => ({ url: `/comments/${id}`, method: "delete" }),
    invalidatesTags: (result, error, {postId}) => [
      { type: "Comment", id: postId },
    ],
  }),
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["Post", "Comment"],
  endpoints: (build) => ({
    ...postApi(build),
    ...commentApi(build),
  }),
});

export const {
  useGetAllPostQuery,
  useGetOnePostQuery,
  useSetPostMutation,
  useEditPostMutation,
  useDeletePostMutation,
  useGetAllCommentQuery,
} = api;
