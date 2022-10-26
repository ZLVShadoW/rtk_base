import React from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/typedRTKHooks';
import {getAllPokemons} from '../Bll/pokemonsSlice';

export const Pokemons = () => {
    const dispatch = useAppDispatch()
    const loadingStatus = useAppSelector<'idle' | 'loading'>(state => state.pokemons.loading)
    const err = useAppSelector(state => state.pokemons.errorMes)
    const pokemons = useAppSelector(state => state.pokemons.results)

    React.useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch])

    return (
        <>
            {err && err}
            {loadingStatus === 'loading' ?
                <div>LOADING ... </div>
                : <div>
                    {pokemons
                        ? pokemons.map(el => (<div key={el.name}>{el.name}</div>))
                        : []}
                </div>
            }
        </>
    );
};