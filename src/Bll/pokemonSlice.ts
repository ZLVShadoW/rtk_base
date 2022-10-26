import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApiPokemons, Pokemon} from '../api/api';
import {AxiosError} from 'axios';

export const getPokemon = createAsyncThunk('pokemon/getPokemon', async (url: string) => {
    try {
        const res = await ApiPokemons.getPokemon(url)
        return res.data
    } catch (e) {
        let err = e as AxiosError
        console.log(err.message)
    }
})

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {} as Pokemon,
    reducers: {
        clearPokemon: () => {
            return {} as Pokemon
        }
    },
    extraReducers: builder => {
        builder.addCase(getPokemon.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export const {clearPokemon} = pokemonSlice.actions
export const pokemonReducer = pokemonSlice.reducer