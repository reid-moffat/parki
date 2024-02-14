'use client';
import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
    value: string
}

const initialState: SearchState = {
    value: ""
}

export const Search = createSlice({
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

export const { set, clear } = Search.actions;
export const { getValue } = Search.selectors;

export default Search.reducer;
