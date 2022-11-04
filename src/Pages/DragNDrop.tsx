import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';

export const DragNDrop = () => {

    return (
        <div style={{display: 'flex', gap: 20}}>
            <div style={{
                width: '250px',
                borderRight: '1px solid #ccc',
                paddingRight: 10
            }}>
                <ul>
                    <li><NavLink to={'first'}>First</NavLink></li>
                    <li><NavLink to={'second'}>Second</NavLink></li>
                    <li><NavLink to={'third'}>Third</NavLink></li>
                </ul>
            </div>

            <div style={{flexGrow: 1}}>
                <Outlet/>
            </div>
        </div>
    );
};