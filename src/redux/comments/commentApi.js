import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_ENDPOINT = "/comments";
const BASE_URL = "https://6393b5f2ab513e12c514f63c.mockapi.io/api";

export const commentApi = createApi({
  reducerPath: "comments",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Comments"],
  endpoints: (builder) => ({
    getComments: builder.query({
      query: () => API_ENDPOINT,
      providesTags: ["Comments"],
      transformResponse: (res) => {
        return res.map((item) => ({ ...item, wow: "yoohoo" }));
      },
    }),
    addNewComment: builder.mutation({
      query: (newComment) => ({
        url: API_ENDPOINT,
        method: "POST",
        body: newComment,
      }),
      invalidatesTags: ["Comments"],
    }),
    updateComment: builder.mutation({
      query: (updatedComment) => ({
        url: `${API_ENDPOINT}/${updatedComment.id}`,
        method: "PUT",
        body: updatedComment,
      }),
      invalidatesTags: ["Comments"],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddNewCommentMutation,
  useUpdateCommentMutation,
} = commentApi;
