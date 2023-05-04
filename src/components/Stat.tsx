import { FC } from "react"
import '../sass/_components/stat.scss'
import { StatPokemon } from "../models/pokemon.stat"

interface Props {
  stat: StatPokemon,
}

const Stat: FC<Props> = ({ stat }) => {
  const { name, value } = stat
  return (
    <div className='stat'>
      <span className='stat__name'>{name}</span>
      <div className='stat__container__value'>
        <div className='stat__value' style={{width: `${value * 2}px`, maxWidth: '95%'}}></div>
      </div>
    </div>
  )
}

export default Stat;