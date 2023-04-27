import { PokemonPromise } from "../models/pokemon.promise"

export const resolvePokemon = async (pokemon : PokemonPromise) => {
    const pokemonResolve = await fetch(pokemon.url);
    const data = await pokemonResolve.json();
    return data; 
}