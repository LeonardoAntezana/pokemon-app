import { useLocation } from "react-router-dom";
import { Title, Carousel, Stat } from "../components";
import { StatPokemon } from "../models/pokemon.stat";
import '../sass/_pages/Details.scss'

const Details = () => {

  const { state: { pokemon } } = useLocation();

  const { id, name, base_experience, images, types, abilities, stats, weight } = pokemon;

  const filterImages = images.filter((pic: string, index: number) => index !== 0)

  return (
    <div className='container'>
      <div className='box'>
        <Carousel images={filterImages}/>
        <div className='info'>
          <Title>{name}</Title>
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
          {stats.map((st: StatPokemon, index: number) => <Stat key={index} stat={st}/>)}
        </div>
      </div>
    </div>
  )
}

export default Details;