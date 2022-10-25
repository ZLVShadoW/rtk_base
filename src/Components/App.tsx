import React from 'react';
import {Route, Routes} from 'react-router-dom';
import '../App.css';
import {Layout} from '../Pages/Layout';
import {Main} from '../Pages/Main';
import {Pokemons} from '../Pages/Pokemons';
import {Counter} from '../Pages/Counter';

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path={'counter'} element={<Counter/>}/>
                <Route path={'pokemons'} element={<Pokemons/>}/>
            </Route>
        </Routes>
    );
}

export default App;