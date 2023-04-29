import { FC } from "react"
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoMdArrowRoundBack } from 'react-icons/io'
import '../sass/_components/carousel.scss'

interface Props{
  images: string[],
  className?: string,
}

const Carousel: FC<Props> = ({ images, className }) => {

  return(
    <div className={`carousel${className ? ` ${className}`: ''}`}>
      <IoMdArrowRoundBack size={50}/>
      <div className='container__images'>
        {images.map((i, index) => <img className='carousel__image' key={index} src={i}/>)}
      </div>
      <IoMdArrowRoundForward size={50}/>
    </div>
  )
}

export default Carousel;