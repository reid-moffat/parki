'use client';
import { createSlice } from '@reduxjs/toolkit';

export interface CurrentSpotState {
    spot: {
        id: string,

        address: string,
        latitude: number,
        longitude: number,
        description: string,
        price: number,

        amenities: string[],
        rating: number,
    }
}

const initialState: CurrentSpotState = {
    spot: {
        id: "",

        address: "",
        latitude: 0,
        longitude: 0,
        description: "",
        price: 0,

        amenities: [],
        rating: 0,
    }
}

export const CurrentSpot = createSlice({
    name: 'currentSpot',
    initialState,
    reducers: {
        updateSpot: (state, action) => { state.spot = action.payload },
        clearSpot: (state) => { state.spot = initialState.spot },
    },
    selectors: {
        getSpot: (state) => state.spot,
        currentSpotExists: (state) => state.spot.address !== ""
    }
})

export const { updateSpot, clearSpot } = CurrentSpot.actions;
export const { getSpot, currentSpotExists } = CurrentSpot.selectors;

export default CurrentSpot.reducer;
