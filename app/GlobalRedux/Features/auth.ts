'use client';
import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
    email: string
}

const initialState: AuthState = {
    email: ""
}

export const Auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updateEmail: (state, action) => { state.email = action.payload },
    },
    selectors: {
        getEmail: (state) => state.email,
    }
})

export const { updateEmail } = Auth.actions;
export const { getEmail } = Auth.selectors;

export default Auth.reducer;
