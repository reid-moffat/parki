'use client';
import { createSlice } from '@reduxjs/toolkit';

export interface Location {
    address: string
    lat: number
    lng: number
}

const initialState: Location = {
    address: "",
    lat: 0,
    lng: 0,
}

export const Search = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.address = action.payload.address;
            state.lat = action.payload.lat;
            state.lng = action.payload.lng;
        },
    },
    selectors: {
        getLocation: (state) => state,
    }
})

export const { setLocation } = Search.actions;
export const { getLocation } = Search.selectors;

export default Search.reducer;
