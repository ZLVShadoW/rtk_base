import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 11 as number
    },
    reducers: {}
})

export const counterReducer = counterSlice.reducer