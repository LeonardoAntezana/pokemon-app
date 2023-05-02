import { FC, ReactNode, MouseEventHandler } from "react";
import '../sass/_components/buttonPag.scss'

interface Props{
  children: ReactNode,
  onClick: MouseEventHandler,
}

const ButtonPag: FC<Props> = ({ children, onClick }) => {
  return(
    <button 
    className='buttonPag'
    onClick={onClick}
    >
      {children}
    </button>
  )
}


export default ButtonPag;