import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jsonApi = createApi({
  reducerPath: "jsonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllData: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getSingleData: builder.query({
      query: (id) => ({
        url: `posts/${id}`,
        method: "GET",
      }),
    }),
    getLimitData: builder.query({
      query: (limit) => ({
        url: `posts?_limit=${limit}`,
        method: "GET",
      }),
    }),
    createData: builder.mutation({
      query: (body) => ({
        url: "posts",
        method: "POST",
        body: body,
        headers: {
          "content-type": "application/json",
          charset: "UTF-8",
        },
      }),
    }),
    deleteDataById: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
    putUpdateData: builder.mutation({
      query: (body) => ({
        url: `posts/${body.id}`,
        method: "PUT",
        body: body,


        headers: {
          "Content-Type": "application/json",
          charset: "UTF-8",
        },
      }),
    }),
  }),
});

export const {
  useGetAllDataQuery,
  useGetSingleDataQuery,
  useGetLimitDataQuery,
  useCreateDataMutation,
  useDeleteDataByIdMutation,
  usePutUpdateDataMutation,
} = jsonApi;
