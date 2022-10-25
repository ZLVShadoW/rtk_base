import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {reset} from './action';

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
        incrementRand: (state, action: PayloadAction<{ number: number }>) => {
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
        },
        [reset.type]: state => {
            state.count = 0
        }
    }
})

export const counter1Reducer = counter1Slice.reducer
export const {decrement, incrementRand} = counter1Slice.actions

//todo: incrementRand есть в слайсе 1 и 2; у каждого свой. могут ли быть случаи конфликта