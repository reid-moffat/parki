'use client';
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './Features/search';
import filtersReducer from './Features/filters';
import currentSpotReducer from './Features/currentSpot';
import authReducer from './Features/auth';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        filters: filtersReducer,
        currentSpot: currentSpotReducer,
        auth: authReducer,

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
