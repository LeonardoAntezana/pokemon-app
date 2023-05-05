import { FC, ReactNode } from "react";
import '../sass/_components/wrapperRadius.scss'

interface Props {
  children: ReactNode,
  backgroundColor?: string,
  className?: string, 
}


const WraperRadius: FC<Props> = ({ children, backgroundColor = '#fff', className }) => {
  return(
    <div className={`wrapper${className ? ` ${className}` : ''}`} style={{backgroundColor: backgroundColor}}>
      {children}
    </div>
  )
}

export default WraperRadius;