import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApiPokemons, PokemonsRequest} from '../api/api';
import {AxiosError} from 'axios';

export const getAllPokemons = createAsyncThunk('pokemons/getAllPokemons', async (
    _) => {
    try {
        const res = await ApiPokemons.getPokemons()
        return res.data
    } catch (e) {
        const err = e as AxiosError
        console.log('e: ', err.message)
    }
})

const initialState: PokemonsRequest & { loading: 'idle' | 'loading' } = {
    count: 0,
    next: '',
    previous: null,
    results: [],
    loading: 'idle',
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllPokemons.pending, (state) => {
                state.loading = 'loading'
            })
            .addCase(getAllPokemons.fulfilled, (state, action) => {
                return action.payload ? {
                    ...action.payload,
                    loading: 'idle'
                } : {} as PokemonsRequest & { loading: 'idle' | 'loading' }
            })
    }
})

export const pokemonsReduser = pokemonsSlice.reducer