import { FC, ReactNode } from "react"
import '../sass/_components/Title.scss'


interface Props{
  children: ReactNode,
  className?: string,
}

const Title: FC<Props> = ({ children, className }) => {
  return (
    <h1 className={`title${className ? ` ${className}` : ''}`}>
      {children}
    </h1>
  )
} 

export default Title;