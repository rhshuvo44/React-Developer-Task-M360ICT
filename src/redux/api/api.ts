import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail: string;
    category: string,
    brand: string,
    sku: string
    stock: number;
    rating: number
    tags: string[]
    images: string[];
    reviews: {
        rating: number,
        comment: string,
        reviewerName: string,
    }[];

}


export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query<{ products: Product[]; total: number }, { limit: number; skip: number }>({
            query: ({ limit, skip }) => ({ url: `products?limit=${limit}&skip=${skip}`, method: 'GET' }),
        }),

    }),
})

export const { useGetProductsQuery } = baseApi