import { useAppSelector } from "../redux/hooks";

const Favorites = () => {
  const favorites = useAppSelector(state => state.favorites.value) 
  console.log(favorites.length)
  return(
    <div>
      FAVORITES
    </div>
  )
}

export default Favorites;