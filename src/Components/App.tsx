import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import '../App.css';
import {Layout} from '../Pages/Layout';
import {Main} from '../Pages/Main';
import {Pokemons} from '../Pages/Pokemons';
import {Counters} from '../Pages/Counters';
import { Pokemon } from '../Pages/Pokemon';
import {Error} from '../Pages/Error';
import {PATH} from '../Pages/constRoutes';
import {Rend} from '../renderFunc/Rend';

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path={PATH.COUNTERS} element={<Counters/>}/>
                <Route path={PATH.POKEMONS} element={<Pokemons/>}/>
                <Route path={PATH.POKEMONS + '/:idp'} element={<Pokemon/>}/>
                <Route path={PATH.ERROR} element={<Error/>}/>
                <Route path={'rend'} element={<Rend/>}/>
                <Route path={'*'} element={<Navigate to={'404'} />}/>
            </Route>
        </Routes>
    );
}

export default App;
