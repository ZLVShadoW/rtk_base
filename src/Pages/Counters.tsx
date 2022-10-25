import React from 'react';
import {Counter1} from '../Components/Counters/Counter1';
import {Counter2} from '../Components/Counters/Counter2';
import {useAppDispatch} from '../hooks/typedRTKHooks';
import {reset} from '../Bll/action';

export const Counters = () => {
    const dispatch = useAppDispatch()

    const onReset = () => {
        dispatch(reset())
    }

    return (
        <>
            <div style={{display: 'flex', gap: 20}}>
                <Counter1/>
                <Counter2/>
            </div>
            <div style={{marginTop: 16}}>
                <button onClick={onReset}>Reset</button>
            </div>
        </>
    );
};