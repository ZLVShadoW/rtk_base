import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';

export const increment = createAction('counter1/increment')

const counter1Slice = createSlice({
    name: 'counter1',
    initialState: {
        count: 11 as number
    },
    reducers: {
        decrement: (state) => {
            state.count = state.count - 1
        },
        incrementRand: (state, action: PayloadAction<{number: number}>) => {
            state.count += action.payload.number
        }
    },
    // прибавлене через ф-цию и builder ------------------ !!!
    // extraReducers: builder => {
    //     builder.addCase(increment, state => {
    //         state.count += 1
    //     })
    // }
    extraReducers: {
        // 'counter1/increment': (state) => {
        //     state.count = state.count + 1
        // },
        [increment.type]: (state) => {
            state.count = state.count + 1
        }
    }
})

export const counter1Reducer = counter1Slice.reducer
export const {decrement, incrementRand} = counter1Slice.actions