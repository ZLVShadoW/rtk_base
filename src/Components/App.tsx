import React from 'react';
import {Route, Routes} from 'react-router-dom';
import '../App.css';
import {Layout} from '../Pages/Layout';
import {Main} from '../Pages/Main';
import {Pokemons} from '../Pages/Pokemons';
import {Counters} from '../Pages/Counters';
import { Pokemon } from '../Pages/Pokemon';

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path={'counters'} element={<Counters/>}/>
                <Route path={'pokemons'} element={<Pokemons/>}/>
                <Route path={'pokemons/:idp'} element={<Pokemon/>}/>
            </Route>
        </Routes>
    );
}

export default App;
