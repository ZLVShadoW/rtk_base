import React from 'react';

export const DragNDrop = () => {
let dr: Element
    const onDragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        dr = e.currentTarget
    }

    const onDragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.currentTarget.style.background = '#ccc'
    }

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.currentTarget.appendChild(dr)
        e.currentTarget.style.background = '#eee'
        dr.setAttribute('draggable', 'false')
    }

    return (
        <>
            <div style={{background: '#eee', padding: 10, margin: 10}}>
                <div onDragStart={onDragStartHandler}
                     onDragEnd={onDragEndHandler}
                     draggable={true}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
            </div>

            <div style={{background: '#eee', padding: 30, margin: 10}}
                 onDragOver={onDragOverHandler}
                 onDrop={onDropHandler}
            >
                zcxzczc
            </div>
        </>
    );
};