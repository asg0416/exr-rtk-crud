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

export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (build) => ({
    getAllPost: build.query({
      query: () => ({ url: "/posts", method: "get" }),
    }),
  }),
});

export const { useGetAllPostQuery } = api;