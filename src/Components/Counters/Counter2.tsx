import React from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks/typedRTKHooks';
import {incrementRand} from '../../Bll/counter2Slice';
import {randomLimitNumber} from './utils';

export const Counter2 = () => {
    const dispatch = useAppDispatch()
    const res = useAppSelector(state => state.counter2.count)

    const incRand = () => {
        dispatch(incrementRand({number: randomLimitNumber(1, 10)}))
    }
    return (
        <div style={{padding: 16, border: '1px solid #eee'}}>
            <div>{res}</div>
            <div>
                <button onClick={incRand}>rand inc</button>
            </div>
        </div>
    );
};