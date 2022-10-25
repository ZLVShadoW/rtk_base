import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/typedRTKHooks';
import {decrement, increment, incrementRand} from '../../Bll/counter1Slice';
import { randomLimitNumber } from './utils';

export const Counter1 = () => {
    const dispatch = useAppDispatch()
    const result = useAppSelector(state => state.counter1.count)

    const dec = () => {
        dispatch(decrement())
    }
    const inc = () => {
        dispatch(increment())
    }

    const incRand = () => {
        dispatch(incrementRand({number: randomLimitNumber(1, 3)}))
    }

    return (
        <div style={{padding: 16, border: '1px solid #eee'}}>
            <div>{result}</div>
            <div>
                <button onClick={dec}>dec</button>
                <button onClick={inc}>inc</button>
                <button onClick={incRand}>rand inc</button>
            </div>
        </div>
    );
};