import { useAppSelector } from "../redux/hooks";
import { Link } from "react-router-dom";
import { PokemonCard, Title } from "../components";
import '../sass/_pages/Favorites.scss'

const Favorites = () => {
  const favorites = useAppSelector(state => state.favorites.value)

  return (
    <div className='favorites__screen'>
      {favorites.length === 0
        ? <Title className='noFavorites'>There are no pokemon yet!</Title>
        : <>
          <h1 className='favorites__screen__title'>Favorites</h1>
          <div className='favorites__container'>{favorites.map(pokemon =>
            <Link to={`/details/${pokemon.id}`} key={pokemon.id} state={{ pokemon }}>
              <PokemonCard pokemon={pokemon} />
            </Link>)}
          </div>
        </>
      }
    </div>
  )
}

export default Favorites;