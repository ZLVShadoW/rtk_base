import {configureStore} from '@reduxjs/toolkit';
import {counter1Reducer} from './counter1Slice';
import {counter2Reducer} from './counter2Slice';

export const store = configureStore({
    reducer: {
        counter1: counter1Reducer,
        counter2: counter2Reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch