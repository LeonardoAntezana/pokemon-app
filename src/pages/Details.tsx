import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addFavorite, deleteFavorite } from "../redux/slices/favoritesSlice";
import { CapitalizeWord, selectBackgroundColor } from "../utilities";
import { Title, Carousel, Stat, ButtonCustom } from "../components";
import { StatPokemon } from "../models/pokemon.stat";
import { AiTwotoneStar } from 'react-icons/ai'
import '../sass/_pages/Details.scss'

const Details = () => {

  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.value);

  const { state: { pokemon } } = useLocation();

  const { id, name, base_experience, images, types, abilities, stats, weight } = pokemon;

  const filterImages = images.filter((pic: string) => pic !== null)

  const pokemonInState = () => favorites.some(poke => poke.id === id)

  const onHandleFav = () => pokemonInState() ? dispatch(deleteFavorite(id)) : dispatch(addFavorite(pokemon))

  useEffect(() => {
    document.title = `Pokemon - ${CapitalizeWord(name)}`
  }, [])

  return (
    <div className='container'>
      <div className='box'>
        <Carousel images={filterImages} className='carousel'/>
        <div className='info'>
          <Title className='name'>{name}</Title>
          <div className='info__container'>
            <p>Experience base: {base_experience}</p>
            <p>Weight: {weight}</p>
            <p>Abilities:</p>
            <div className='container__abilities'>
            {abilities.map((ab: any, index: number) => <span className='abilitie' key={index}>{ab}</span>)}
            </div>
            <p>Types:</p>
            <div className='container__types'>
            {types.map((type: any, index: number) => {
              const color = selectBackgroundColor(type);
              return <span className='type' style={{backgroundColor: color}} key={index}>{type}</span>
            })}
            </div>
          </div>
        </div>
        <div className='container__stats'>
          {stats.map((st: StatPokemon, index: number) => <Stat key={index} stat={st} styleText='name__stat' />)}
        </div>
        <ButtonCustom
          onClick={onHandleFav}
          className='buttonAdd'>
          {pokemonInState() ? 'delete to favorites' : 'add to favorites'}
          <AiTwotoneStar size={25} color={pokemonInState() ? 'red' : 'white'}/>
        </ButtonCustom>
      </div>
    </div>
  )
}

export default Details;