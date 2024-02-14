'use client';
import { createSlice } from '@reduxjs/toolkit';

export interface SearchState {
    value: string
}

const initialState: SearchState = {
    value: ""
}

export const searchSlice = createSlice({
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

export const { set, clear } = searchSlice.actions;
export const { getValue } = searchSlice.selectors;

export default searchSlice.reducer;