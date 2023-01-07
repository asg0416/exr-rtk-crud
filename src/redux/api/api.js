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
  }),
  getOnePost: build.query({
    query: (id) => ({ url: `/posts/${id}`, method: "get" }),
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
  }),
  deletePost: build.mutation({
    query: (id) => ({ url: `/posts/${id}`, method: "delete" }),
  }),
});

const commentApi = (build) => ({
  getAllComment: build.query({
    query: (postId) => ({ url: `/comments?postId=${postId}`, method: "get" }),
  }),
});

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery(),
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
} = api;
