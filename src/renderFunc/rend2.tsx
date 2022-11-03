import React from 'react';

export const Rend2 = ({
    num,
    setNum
}: { num?: number, setNum: React.Dispatch<React.SetStateAction<number>> }) => {

    const inc = () => {
        setNum(prev => prev + 1)
    }
    return (
        <>
            <div>
                Component_2 {num}
            </div>
            <div>
                <button onClick={inc}>increment</button>
            </div>
        </>
    );
};
