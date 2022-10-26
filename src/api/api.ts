import axios from 'axios';

export const baseURL = 'https://pokeapi.co/api/v2/';

const instance = axios.create({
    baseURL: baseURL
})

export const ApiPokemons = {
    getPokemons() {
        return instance.get<PokemonsRequest>('pokemon')
    },
    getPokemon(urlId: string) {
        return instance.get<Pokemon>('pokemon/' + urlId)
    }
}


// types
export type PokemonsRequest = {
    count: number
    next: string
    previous: NullableType<string>
    results: PokemonItemType[]
}

export type PokemonItemType = {
    name: string
    url: string
}

export type Pokemon = {
    id: number
    name: string
    sprites: {
        other: {
            'official-artwork': {
                front_default: string
            }
        }
    }
    weight: number
}

export type NullableType<T> = null | T