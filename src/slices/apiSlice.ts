import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://registry.npmjs.org/-/v1/' }),
    endpoints: builder => ({
        getResults: builder.query({
            query: (term) => `search?text=${term}`,
        }),
    }),
})

export const { useGetResultsQuery } = apiSlice