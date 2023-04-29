import { FC } from "react"
import Pokemon from "../models/pokemon"
import Title from "./Title"
import '../sass/_components/pokemonCard.scss'

interface Props {
  pokemon: Pokemon,
  className?: string,
  onClick?: (id:number) => void,
}

const PokemonCard: FC<Props> = ({ pokemon, className, onClick }) => {
  const { id, name, images, types } = pokemon;
  return (
    <div
    className={`pokemonCard${className ? ` ${className}`: ''}`}  
    onClick={() => onClick && onClick(id)}>
      <Title>{name}</Title>
      <img className='image' src={`${images[1]}`}/>
      <div className='pokemonCard__types'>
        {types.map((type, index) => <span key={index}>{type}</span>)}
      </div>
    </div>
  )
}

export default PokemonCard;