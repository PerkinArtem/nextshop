import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const categoryApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_BASE_URL }),
  endpoints: (builder) => ({
    getAllCategories: builder.query<string[], number>({
      query: (limit) => `/products/categories`,
    }),
  }),
})

export const { useGetAllCategoriesQuery } = categoryApi