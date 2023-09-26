import { baseApi } from "../api/baseApi";

export const taskApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //get task
    getTasks: builder.query({
      query: () => "/getTasks",
      providesTags: ["task"],
    }),
    //get task by id
    getTasksById: builder.query({
      query: (_id) => `/getTask/${_id}`,
    }),

    // post task
    postTasks: builder.mutation({
      query: (data) => ({
        url: "/postTasks",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["task"],
    }),
    // update task
    updateTasks: builder.mutation({
      query: ({ data, id }) => ({
        url: `/updateTask/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["task"],
    }),
    // delete task
    deleteTasks: builder.mutation({
      query: (id) => ({
        url: `/deleteTask/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["task"],
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTasksByIdQuery,
  usePostTasksMutation,
  useDeleteTasksMutation,
  useUpdateTasksMutation,
} = taskApi;
