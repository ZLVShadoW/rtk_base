import React from 'react';
import {Link, Outlet} from 'react-router-dom';

export const Layout = () => {
    return (
        <div style={{maxWidth: 1250, margin: '0 auto'}}>
            <header style={{padding: '14px 0', borderBottom: '1px solid #ccc', marginBottom: 16}}>
                <nav>
                    <ul style={{display: 'flex', gap: 16, listStyle: 'none', padding: 0, margin: 0}}>
                        <li><Link to={'/'}>Main</Link></li>
                        <li><Link to={'counters'}>Counter</Link></li>
                        <li><Link to={'pokemons'}>Pokemons</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};