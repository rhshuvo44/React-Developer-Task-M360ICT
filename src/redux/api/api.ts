import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({

    }),
})

export const { } = baseApi