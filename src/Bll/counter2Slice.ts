import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {reset} from './action';

const initialState = {
    count: 0 as number
}

const counter2Slice = createSlice({
    name: 'counter2',
    initialState,
    reducers: {
        incrementRand: (state, action: PayloadAction<{number: number}>) => {
            state.count += action.payload.number
        }
    },
    extraReducers: builder => builder.addCase(reset, state => {
        state.count = 0
    })
})

export const counter2Reducer = counter2Slice.reducer
export const {incrementRand} = counter2Slice.actions