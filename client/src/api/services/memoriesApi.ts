import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { METHODS, MEMORIESURLS } from "../constants";

export const memoriesApi = createApi({
    reducerPath: 'memoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/api',
        prepareHeaders: (headers) => {
            headers.set("Content-Type", "application/json");
            return headers;
        }
    }),
    tagTypes: ['Memories'],
    endpoints: (builder) => ({
        getAllMemories: builder.query({
            query: () => ({
                url: MEMORIESURLS.GETMEMORIES,
                method: METHODS.GET,
            }),
            providesTags:  ['Memories']
        }),
        createMemory: builder.mutation({
            query: (payload) => ({
                url: MEMORIESURLS.POSTMEMORY,
                method: METHODS.POST,
                body: payload 
            }),
            invalidatesTags: ['Memories']
        })
    })
});

export const { useGetAllMemoriesQuery, useCreateMemoryMutation } = memoriesApi;
