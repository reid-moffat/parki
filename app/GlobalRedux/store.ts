'use client';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './Features/searchSlice';
import filtersReducer from './Features/filtersSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        filters: filtersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
