import React from 'react';
import {NavLink, Outlet} from 'react-router-dom';
import {PATH} from './constRoutes';

export const Layout = () => {

    const activeClass = ({isActive}: {isActive: boolean}) => ({color: isActive ? 'red' : '#000'})

    return (
        <div style={{maxWidth: 1250, margin: '0 auto'}}>
            <header style={{padding: '14px 0', borderBottom: '1px solid #ccc', marginBottom: 16}}>
                <nav>
                    <ul style={{display: 'flex', gap: 16, listStyle: 'none', padding: 0, margin: 0}}>
                        <li><NavLink style={activeClass} to={'/'} end >Main</NavLink></li>
                        <li><NavLink style={activeClass} to={PATH.COUNTERS}>Counter</NavLink></li>
                        <li><NavLink style={activeClass} to={PATH.POKEMONS}>Pokemons</NavLink></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};