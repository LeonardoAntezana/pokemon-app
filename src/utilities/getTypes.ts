import { getDataRequest } from "./getDataRequest"
import { PokemonPromise } from '../models/pokemon.promise'

export const getTypes = async (url: string) => {
  const types = await getDataRequest(url);
  try{
    const typesNames: string[] = types.results.map((t: PokemonPromise) => t.name);
    return typesNames;
  }
  catch{}
}