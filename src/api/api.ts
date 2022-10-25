import axios from "axios";

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const ApiPokemons = {
    getPokemons() {
       return instance.get<PokemonsRequest>('pokemon')
    }
}


// types
export type PokemonsRequest = {
    count: number,
    next: string,
    previous: NullableType<string>,
    results: PokemonItem[]
}

export type PokemonItem = {
    name: string,
    url: string
}

export type NullableType<T> = null | T