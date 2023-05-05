import { ChangeEvent, useState, useEffect, useRef } from "react"
import { BASE_URL } from "../constants/endPoints"
import { transformData, getDataRequest, getTypes } from "../utilities"
import { Link } from "react-router-dom"
import Pokemon from "../models/pokemon"
import { PokemonPromise } from "../models/pokemon.promise"
import { InputCustom, PokemonCard } from "../components"
import { MagnifyingGlass } from "react-loader-spinner"
import '../sass/_pages/Home.scss'

const Home = () => {

  const offSet = useRef<number>(0);
  const [request, setRequest] = useState<string>(`pokemon?limit=12&offset=${offSet.current}`)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const [types, setTypes] = useState<string[]>();
  const inputValue = useRef<string>();

  const getPokemons = async (url: string) => {
    const data = await getDataRequest(url);
    try {
      const pokes = await transformData(data.results);
      setPokemons(pokes);
    }
    catch {
      const pokes: PokemonPromise[] = data.pokemon.map((poke: any) => poke.pokemon);
      const res = await transformData(pokes);
      setPokemons(res.slice(0, 12));
    }
  }

  const getTypesPokemon = async (url: string) => {
    const types = await getTypes(url);
    setTypes(types);
  }

  // CARGA DE POKEMONS
  useEffect(() => {
    getPokemons(BASE_URL + request);
  }, [request])

  // CARGA DE TIPOS DE POKEMONS PARA MANEJAR OPTIONS
  useEffect(() => {
    getTypesPokemon(BASE_URL + 'type');
  }, [])

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => inputValue.current = event.target.value;

  const onHandleSelect = (event: ChangeEvent<HTMLSelectElement>) => setRequest(`type/${event.target.value}`);

  return (
    <div className='home'>
      <div className='filters'>
        <select
          onChange={onHandleSelect}
          className='home__select'
        >
          {types?.map((t, index) => <option key={index} value={t}>{t}</option>)}
        </select>
        <InputCustom
          onChange={onHandleChange}
          className='input__search'
          placeholder='Buscar pokemon...'
          value={inputValue.current}
        />
      </div>
      {pokemons.length === 0
        ? <MagnifyingGlass color='black' height={150} width={150} />
        : <div className='container__pokemons'>
          {pokemons.map((poke: Pokemon) => {
            return (
              <Link
                to={`/details/${poke.id}`}
                state={{ pokemon: poke }}
                key={poke.id}
                className='card'>
                <PokemonCard pokemon={poke} className='card' />
              </Link>
            )
          })}
        </div>
      }



    </div>
  )
}

export default Home