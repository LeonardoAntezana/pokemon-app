import { useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import { PokemonCard } from "../components";
import '../sass/_pages/Favorites.scss'

const Favorites = () => {
  const favorites = useAppSelector(state => state.favorites.value)

  return (
    <div className='favorites__screen'>
      <h1 className='favorites__screen__title'>Favoritos</h1>
      <div className='favorites__container'>
        {favorites.map(pokemon => 
        <Link to={`/details/${pokemon.id}`} key={pokemon.id} state={{pokemon}}>
          <PokemonCard pokemon={pokemon}/>
        </Link>)}
      </div>
    </div>
  )
}

export default Favorites;