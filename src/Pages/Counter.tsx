import React from 'react';
import {useAppSelector} from '../hooks/typedRTKHooks';

export const Counter = () => {
    const result = useAppSelector(state => state.counter.count)

    return (
        <>
            <div>{result}</div>
            <div>
                <button>dec</button>
                <button>inc</button>
                <button>rand inc</button>
            </div>
        </>
    );
};