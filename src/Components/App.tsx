import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import '../App.css';
import {Layout} from '../Pages/Layout';
import {Main} from '../Pages/Main';
import {Pokemons} from '../Pages/Pokemons';
import {Counters} from '../Pages/Counters';
import {Pokemon} from '../Pages/Pokemon';
import {Error} from '../Pages/Error';
import {PATH} from '../Pages/constRoutes';
import {Render} from '../Pages/Render';
import {DragNDrop} from '../Pages/DragNDrop';
import {First} from './DragNDropPractice/1_Steps';
import {Second} from './DragNDropPractice/2_Steps';

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path={PATH.COUNTERS} element={<Counters/>}/>
                <Route path={PATH.POKEMONS} element={<Pokemons/>}/>
                <Route path={PATH.POKEMONS + '/:pid'} element={<Pokemon/>}/>
                <Route path={PATH.ERROR} element={<Error/>}/>
                <Route path={PATH.RENDER} element={<Render/>}/>
                <Route path={PATH.DRAG_N_DROP} element={<DragNDrop/>} >
                    <Route index element={<div>Chose</div>}/>
                    <Route path={'first'} element={<First/>}/>
                    <Route path={'second'} element={<Second/>}/>
                    <Route path={'third'} element={<div>12</div>}/>
                </Route>
                <Route path={'*'} element={<Navigate to={'404'}/>}/>
            </Route>
        </Routes>
    );
}

export default App;
