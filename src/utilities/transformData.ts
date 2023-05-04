import { PokemonPromise } from "../models/pokemon.promise";
import { resolvePokemon } from ".";
import { createPokemon } from ".";

export const transformData = async (pokemons : PokemonPromise[]) => {
  const promises = pokemons.map(async (poke: PokemonPromise) => resolvePokemon(poke));
  const dataResolve = await Promise.all(promises);
  const newPokemons = dataResolve.map(pokemon => createPokemon(pokemon));
  return newPokemons;
}