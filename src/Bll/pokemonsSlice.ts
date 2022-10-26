import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ApiPokemons, NullableType, PokemonsRequest} from '../api/api';
import {AxiosError} from 'axios';

export const getAllPokemons = createAsyncThunk<PokemonsRequest, void, {rejectValue: string}>('pokemons/getAllPokemons', async (
    _, {rejectWithValue}) => {
    try {
        const res = await ApiPokemons.getPokemons()
        return res.data
    } catch (e) {
        const err = e as AxiosError
        console.log('e: ', err.message)
        return rejectWithValue(err.message)
    }
})

type LoadingStatusType = 'idle' | 'loading'

type InitialSliceStateType = PokemonsRequest & {
    loading: LoadingStatusType
    errorMes: NullableType<string>
}

const initialState: InitialSliceStateType = {
    count: 0,
    next: '',
    previous: null,
    results: [],
    loading: 'idle',
    errorMes: null
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllPokemons.pending, (state) => {
                state.loading = 'loading'
                state.errorMes = null
            })
            .addCase(getAllPokemons.fulfilled, (state, action) => {
                // state.loading = 'idle'
                return {...state, loading: 'idle', ...action.payload}
            })
            .addCase(getAllPokemons.rejected, (state, action) => {
                state.errorMes = action.payload ? action.payload : null
                state.loading = 'idle'
            })
            // .addCase(getAllPokemons.fulfilled, (state, action) => {
            //     return action.payload ? {
            //         ...action.payload,
            //         loading: 'idle'
            //     } : {} as PokemonsRequest & { loading: 'idle' | 'loading' }
            // })
    }
})

export const pokemonsReduser = pokemonsSlice.reducer