import { FC, ReactNode, MouseEventHandler } from "react";
import '../sass/_components/buttonCustom.scss'

interface Props{
  children: ReactNode,
  onClick: MouseEventHandler,
  className?: string,
  disabled?: boolean 
}

const ButtonCustom: FC<Props> = ({ children, onClick, className, disabled = false }) => {
  return(
    <button 
    className={`buttonCustom${className ? ` ${className}` : ''}`}
    onClick={onClick}
    disabled={disabled}
    >
      {children}
    </button>
  )
}


export default ButtonCustom;