import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from './../../types';

export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.API_BASE_URL }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IProduct[], number>({
      query: (limit) => `/products`,
    }),
  }),
})

export const { useGetAllProductsQuery } = productApi