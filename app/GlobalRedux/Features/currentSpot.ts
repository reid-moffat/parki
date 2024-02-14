'use client';
import { createSlice } from '@reduxjs/toolkit';

export interface CurrentSpotState {
    spot: {
        address: string,
        latitude: number,
        longitude: number,
        description: string,
        price: number,
        distance: number,
        period: string,
        amenities: string[],
        rating: number,
    } | null
}

const initialState: CurrentSpotState = {
    spot: null
}

export const CurrentSpot = createSlice({
    name: 'currentSpot',
    initialState,
    reducers: {
        setSpot: (state, action) => { state.spot = action.payload }
    },
    selectors: {
        getSpot: (state) => state.spot,
    }
})

export const { setSpot } = CurrentSpot.actions;
export const { getSpot } = CurrentSpot.selectors;

export default CurrentSpot.reducer;
