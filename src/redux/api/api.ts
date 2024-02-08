import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  tagTypes: ['todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        const params = new URLSearchParams();

        if (priority) {
          params.append('priority', priority);
        }

        return {
          // fokira style
          // url: `/tasks?priority=${priority}`,
          url: `/tasks`,
          method: 'GET',
          // another fokira style
          // params: { priority },
          params: params,
        };
      },
      providesTags: ['todo'],
    }),

    addTodo: builder.mutation({
      query: (data) => {
        return {
          url: '/task',
          method: 'POST',
          body: data,
        };
      },
      invalidatesTags: ['todo'],
    }),

    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/task/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['todo'],
    }),
    toggleCompleteTodo: builder.mutation({
      query: (updateOption) => {
        return {
          url: `/task/${updateOption.id}`,
          method: 'PUT',
          body: updateOption.updateData,
        };
      },
      invalidatesTags: ['todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useToggleCompleteTodoMutation,
} = baseApi;
