'use client';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './Features/search';
import filtersReducer from './Features/filters';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        filters: filtersReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
