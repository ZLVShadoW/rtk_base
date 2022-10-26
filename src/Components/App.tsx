import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import '../App.css';
import {Layout} from '../Pages/Layout';
import {Main} from '../Pages/Main';
import {Pokemons} from '../Pages/Pokemons';
import {Counters} from '../Pages/Counters';
import { Pokemon } from '../Pages/Pokemon';
import {Error} from '../Pages/Error';

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path={'counters'} element={<Counters/>}/>
                <Route path={'pokemons'} element={<Pokemons/>}/>
                <Route path={'pokemons/:idp'} element={<Pokemon/>}/>
                <Route path={'404'} element={<Error/>}/>
                <Route path={'*'} element={<Navigate to={'404'} />}/>
            </Route>
        </Routes>
    );
}

export default App;
