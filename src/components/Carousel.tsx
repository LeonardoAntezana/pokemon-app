import { FC, useState } from "react"
import { IoMdArrowRoundForward } from 'react-icons/io';
import { IoMdArrowRoundBack } from 'react-icons/io'
import '../sass/_components/carousel.scss'

interface Props {
  images: string[],
  className?: string,
}

const Carousel: FC<Props> = ({ images, className }) => {

  const [translateX, setTranslateX] = useState<number>(0);

  const nextImage = () => translateX - 130 >= (-130) * (images.length - 1) && setTranslateX(state => state - 130);

  const prevImage = () => translateX + 130 <= 0 && setTranslateX(state => state + 130);

  if(images.length === 1){
    return(
      <div className='container__images'>
        <img src={images[0]}/>
      </div>
    )
  }

  return (
    <div className={`carousel${className ? ` ${className}` : ''}`}>
      <button
        onClick={prevImage}
        className={`${translateX + 130 > 0 ? 'button__disabled' : 'action__button'}`}
        disabled={translateX + 130 > 0}>
        <IoMdArrowRoundBack size={20} />
      </button>
      <div className='container__images' style={{ translate: `${translateX}%` }}>
        {images.map((i, index) => <img className='carousel__image' key={index} src={i} />)}
      </div>
      <button
        onClick={nextImage}
        className={`${translateX - 130 < (-130) * (images.length - 1) ? 'button__disabled' : 'action__button'}`}
        disabled={translateX - 130 < (-130) * (images.length - 1)}
        >
        <IoMdArrowRoundForward size={20} />
      </button>
    </div>
  )

}

export default Carousel;