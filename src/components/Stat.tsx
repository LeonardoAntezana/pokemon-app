import { FC, useEffect, useState } from "react"
import '../sass/_components/stat.scss'
import { StatPokemon } from "../models/pokemon.stat"

interface Props {
  stat: StatPokemon,
  styleText?: string
}

const Stat: FC<Props> = ({ stat, styleText }) => {

  let { name, value } = stat

  const [valueSlow, setValueSlow] = useState<number>(0)

  useEffect(() => {
    const timeputStat = setTimeout(() => {
      setValueSlow(value);
    }, 200)
    return () => clearTimeout(timeputStat);
  }, [])

  return (
    <div className='stat'>
      <span className={`stat__name${styleText ? ` ${styleText}` : ''}`}>{name}</span>
      <div className='stat__container__value'>
        <div className='stat__value' style={{width: `${valueSlow * 2}px`, maxWidth: '95%'}}></div>
      </div>
    </div>
  )
}

export default Stat;