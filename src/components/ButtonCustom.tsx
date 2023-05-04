import { FC, ReactNode, MouseEventHandler } from "react";
import '../sass/_components/buttonCustom.scss'

interface Props{
  children: ReactNode,
  onClick: MouseEventHandler,
  className?: string,
}

const ButtonCustom: FC<Props> = ({ children, onClick, className }) => {
  return(
    <button 
    className={`buttonCustom${className ? ` ${className}` : ''}`}
    onClick={onClick}
    >
      {children}
    </button>
  )
}


export default ButtonCustom;