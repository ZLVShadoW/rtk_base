import React from 'react';

export const First = () => {

    let [dr, setDr] = React.useState<EventTarget & HTMLDivElement | null>(null)

    // let dr: Element

    const onDragStartHandler = (e: React.DragEvent<HTMLDivElement>) => {
        // dr = e.currentTarget
        setDr(e.currentTarget)
    }

    const onDragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag End')
    }

    const onDragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.currentTarget.style.background = '#ccc'
    }

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        e.currentTarget.appendChild(dr as Node)
        e.currentTarget.style.background = '#eee'
        // dr.setAttribute('draggable', 'false')
    }
    const onDragLeaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.currentTarget.style.background = '#eee'
    }

    return (
        <>
            <h2>First</h2>

            <div style={{background: '#eee', padding: 10, margin: 10}}>
                <div onDragStart={onDragStartHandler}
                     onDragEnd={onDragEndHandler}
                     draggable={true}
                     style={{cursor: 'move'}}
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing.
                </div>
            </div>

            <div style={{background: '#eee', padding: 30, margin: 10}}
                 onDragOver={onDragOverHandler}
                 onDrop={onDropHandler}
                 onDragLeave={onDragLeaveHandler}
            >
                Lorem ipsum dolor sit amet.
            </div>
        </>
    );
};