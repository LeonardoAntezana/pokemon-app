import { FC } from "react"
import { selectBackgroundColor } from "../utilities"
import Pokemon from "../models/pokemon"
import { WraperRadius, Title } from "."
import '../sass/_components/pokemonCard.scss'

interface Props {
  pokemon: Pokemon,
  className?: string,
}

const PokemonCard: FC<Props> = ({ pokemon, className }) => {
  const { name, images, types } = pokemon;
  const color = selectBackgroundColor(types);
  return (
    <div
      className={`pokemonCard${className ? ` ${className}` : ''}`}
      style={{ backgroundColor: color, color: color }}
    >
      <WraperRadius backgroundColor="white">
        <Title>{name}</Title>
      </WraperRadius>
      <img className='image' src={images[1] ? images[1] : images[0]} />
      <div className='pokemonCard__types'>
        {types.map((type, index) => <WraperRadius className='type' key={index}>{type}</WraperRadius>)}
      </div>
    </div>
  )
}

export default PokemonCard;