'use client';
import { createSlice } from '@reduxjs/toolkit';

export interface Location {
    street: string
    city: string
    lat: number
    lng: number
}

const initialState: Location = {
    street: "",
    city: "",
    lat: 0,
    lng: 0,
}

export const Search = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setLocation: (state, action) => {
            state.street = action.payload.street;
            state.city = action.payload.city;
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
