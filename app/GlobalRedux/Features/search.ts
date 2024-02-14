'use client';
import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
    value: string
}

const initialState: SearchState = {
    value: ""
}

export const search = createSlice({
    name: 'search',
    initialState,
    reducers: {
        set: (state, action) => { state.value = action.payload },
        clear: (state) => { state.value = "" },
    },
    selectors: {
        getValue: (state) => state.value,
    }
})

export const { set, clear } = search.actions;
export const { getValue } = search.selectors;

export default search.reducer;
