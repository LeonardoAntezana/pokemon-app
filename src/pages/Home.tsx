import { ChangeEvent, useState, useEffect, useRef } from "react"
import { BASE_URL } from "../constants/endPoints"
import { transformData, getDataRequest } from "../utilities"
import { Link } from "react-router-dom"
import Pokemon from "../models/pokemon"
import { PokemonPromise } from "../models/pokemon.promise"
import { InputCustom, ButtonCustom, PokemonCard, Pagination, Title } from "../components"
import { MagnifyingGlass } from "react-loader-spinner"
import { ImSearch } from 'react-icons/im'
import '../sass/_pages/Home.scss'

const Home = () => {

  const offSet = useRef<number>(0);
  const [request, setRequest] = useState<string>(`pokemon?limit=12&offset=${offSet.current}`)
  const [pokemons, setPokemons] = useState<Pokemon[]>([])
  const inputValue = useRef<string>('');
  const actualPage = useRef<number>(0);
  const nullSearch = useRef<boolean>();

  const getPokemons = async (url: string) => {
    setPokemons([]);
    const data = await getDataRequest(url);
    const pokes = await transformData(data.results);
    setPokemons(pokes);
  }

  // FILTRANDO SEGUN EL NOMBRE DEL POKEMON
  const getAllPokemons = async (url: string, name: string) => {
    if (name) {
      setPokemons([]);
      const data = await getDataRequest(url);
      const filterPokes = data.results.filter((poke: PokemonPromise) => poke.name.includes(name));
      const res = await transformData(filterPokes);
      if (res.length === 0) {
        nullSearch.current = true;
      }
      setPokemons(res.slice(0, 20));
    }
  }

  // CARGA DE POKEMONS
  useEffect(() => {
    getPokemons(BASE_URL + request);
  }, [request])

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => inputValue.current = event.target.value;

  const onChangePage = (num: number) => {
    actualPage.current = num;
    offSet.current = 12 * num
    setRequest(`pokemon?limit=12&offset=${offSet.current}`)
  };

  return (
    <div className='home'>
      <div className='filters'>
        <div className="container__search">
          <InputCustom
            onChange={onHandleChange}
            className='input__search'
            placeholder='Search pokemon...'
            type="search"
          />
          <ButtonCustom
            onClick={() => getAllPokemons(BASE_URL + 'pokemon?limit=1000&offset=0', inputValue.current)}
            className='button__search'>
            <ImSearch color='#fff' />
          </ButtonCustom>
        </div>
      </div>
      {pokemons.length !== 0
        ? <>
          <Pagination numbers={[1, 2, 3, 4, 5]} onClick={onChangePage} firsState={actualPage.current} />
          <div className='container__pokemons'>
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
        </>
        : nullSearch.current 
        ? <Title className='nullSearch'>No pokemon found!</Title>
        : <div className='loaderContainer'><MagnifyingGlass color='black' height={150} width={150} /></div> 
      }
    </div>
  )
}

export default Home