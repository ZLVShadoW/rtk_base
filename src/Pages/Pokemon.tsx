import React from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/typedRTKHooks';
import {useParams} from 'react-router-dom';
import {clearPokemon, getPokemon} from '../Bll/pokemonSlice';

export const Pokemon = () => {
    const dispatch = useAppDispatch()

    const {idp} = useParams()

    const {id, name, sprites, weight} = useAppSelector(state => state.pokemon)

    React.useEffect(() => {
        dispatch(getPokemon(idp!))

        return () => {
            dispatch(clearPokemon())
        }
    }, [dispatch, idp])

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