import { configureStore } from '@reduxjs/toolkit'
import authSliceReducers from './slices/authSlice'
import { apiSlice } from './slices/apiSlice'

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducers
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true,
})