import { configureStore } from '@reduxjs/toolkit'
import issueSlice from './slices/issueSlice'
import { apiSlice } from './slices/apiSlice'

export const store = configureStore({
    reducer: {
        issueSlice: issueSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch