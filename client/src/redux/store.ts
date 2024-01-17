import { configureStore } from "@reduxjs/toolkit";
import { memoriesApi } from "../api/services/memoriesApi";

export const store = configureStore({
    reducer: {
        [memoriesApi.reducerPath]: memoriesApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(memoriesApi.middleware)
})

export default store