import { useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addFavorite, deleteFavorite } from "../redux/slices/favoritesSlice";
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

  return (
    <div className='container'>
      <div className='box'>
        <Carousel images={filterImages} className='carousel'/>
        <div className='info'>
          <Title className='name'>{name}</Title>
          <div>
            <p>Experience base: {base_experience}</p>
            <p>Weight: {weight}</p>
            <p>Types:</p>
            {types.map((type: any, index: number) => <span key={index}>{type}</span>)}
            <p>Abilities:</p>
            {abilities.map((ab: any, index: number) => <p key={index}>{ab}</p>)}
          </div>
        </div>
        <div className='container__stats'>
          {stats.map((st: StatPokemon, index: number) => <Stat key={index} stat={st} />)}
        </div>
        <ButtonCustom
          onClick={onHandleFav}
          className='buttonAdd'>
          {pokemonInState() ? 'eliminar de favoritos' : 'agregar a favoritos'}
          <AiTwotoneStar size={25} color={pokemonInState() ? 'red' : 'white'}/>
        </ButtonCustom>
      </div>
    </div>
  )
}

export default Details;