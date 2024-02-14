'use client';
import { createSlice } from '@reduxjs/toolkit';

export interface FiltersState {
    range: number,
    price: [number, number],
    amenities: {
        'Accessible': boolean,
        'Self-Park': boolean,
        'EV Charging': boolean,
        'Covered': boolean,
        'On-Site Staff': boolean,
        'Shovelling Included': boolean,
    },
}

const initialState: FiltersState = {
    range: 30,
    price: [0, 200],
    amenities: {
        'Accessible': false,
        'Self-Park': false,
        'EV Charging': false,
        'Covered': false,
        'On-Site Staff': false,
        'Shovelling Included': false,
    },
}

export const filters = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setRange: (state, action) => { state.range = action.payload },
        setPrice: (state, action) => { state.price = action.payload },
        updateAmenity: (state, action) => {
            // @ts-ignore
            state.amenities[action.payload] = !state.amenities[action.payload];
        },
    },
    selectors: {
        getRange: (state) => state.range,
        getPrice: (state) => state.price,
        getAmenities: (state) => state.amenities,
    }
})

export const { setRange, setPrice, updateAmenity } = filters.actions;
export const { getRange, getPrice, getAmenities } = filters.selectors;

export default filters.reducer;
