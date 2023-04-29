import { ChangeEvent, useState, useEffect } from "react"
import { resolvePokemon } from "../utilities/resolvePokemon"
import { createPokemon } from "../utilities/createPokemon"
import { BASE_URL } from "../constants/endPoints"
import { PokemonPromise } from "../models/pokemon.promise"
import Pokemon from "../models/pokemon"
import { InputCustom, PokemonCard } from "../components"
import '../sass/_pages/Home.scss'
import { Link } from "react-router-dom"

const Home = () => {

  const [request, setRequest] = useState<string>('pokemon')
  const [inputValue, setInputValue] = useState<string>('')
  const [pokemons, setPokemons] = useState<Pokemon[]>()
  
  const transformData = async () => {
    const data = await fetch(BASE_URL + request).then(res => res.json());
    const promises: PokemonPromise[] = data.results.map( async (poke: PokemonPromise) => resolvePokemon(poke));
    const dataResolve = await Promise.all(promises);
    const newPokemons = dataResolve.map(pokemon => createPokemon(pokemon));
    setPokemons(newPokemons);
  }
  
  useEffect(() => {
    transformData();
  }, [])
  
  const onHandleChange = (event : ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)

  return (
   <div className='home'>
     <div className='filters'>
      <select className='home__select'>
        <option value="None">Ninguno</option>
        <option value="Planta">Planta</option>
        <option value="Fuego">Fuego</option>
      </select>
      <InputCustom 
      onChange={onHandleChange}
      className='input__search'
      placeholder='Buscar pokemon...'
      value={inputValue}
      />
    </div>
    <div className='container__pokemons'>
      {pokemons?.length !== 0 && pokemons?.map((poke: Pokemon) => {
        return(
          <Link 
          to={`/details/${poke.id}`}
          state={{pokemon : poke}} 
          key={poke.id} 
          className='card'>
            <PokemonCard pokemon={poke} className='card'/>
          </Link>
        )
      })}
    </div>
   </div>
  )
}

export default Home