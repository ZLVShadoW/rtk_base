import React from 'react';

export const Rend1 = ({
    num,
    setNum
}: { num?: number, setNum: React.Dispatch<number> }) => {
    return (
        <div>
            Component_1 {num}
        </div>
    );
};
