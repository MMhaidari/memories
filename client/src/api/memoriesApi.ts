import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { METHODS, MEMORIESURLS } from "./constants";

export const memoriesApi = createApi({
    reducerPath: 'memoriesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000',
        prepareHeaders: (headers)=> {
            headers.set("Content", "Content-Type:application/json");
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getAllMemories: builder.query({
            query: () => ({
                url: MEMORIESURLS.GETMEMORIES,
                method: METHODS.GET
            })
        })
    })
})