import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const flowerApi = createApi({
    reducerPath: 'flowerApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com',
    }),
    tagTypes: ['Product'],
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => '/c/565e-6c17-4f2c-b453', 
            transformResponse: (response) => response.products,
            providesTags: ['Product'],
        }),
    }),
});

export const { useGetProductsQuery } = flowerApi;
export default flowerApi;