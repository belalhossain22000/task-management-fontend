import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://task-management-server-nu.vercel.app",
  }),
  tagTypes: ['task'],
  endpoints: (builder) => ({}),
 
});


