import React from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/typedRTKHooks';
import {useParams} from 'react-router-dom';
import {clearPokemon, getPokemon} from '../Bll/pokemonSlice';

export const Pokemon = () => {
    const dispatch = useAppDispatch()

    const {pid} = useParams()

    const {id, name, sprites, weight} = useAppSelector(state => state.pokemon)

    React.useEffect(() => {
        dispatch(getPokemon(pid!))

        return () => {
            dispatch(clearPokemon())
        }
    }, [dispatch, pid])

    return (
        <div>
            id: {id && id} <br/>
            name: {name && name} <br/>
            weight: {weight && weight} <br/>
            <img src={sprites && sprites.other['official-artwork'].front_default}
                 alt={name}/> <br/>
        </div>
    );
};