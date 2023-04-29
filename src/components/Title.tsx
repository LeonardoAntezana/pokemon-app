import { FC, ReactNode } from "react"
import '../sass/_components/Title.scss'


interface Props{
  children: ReactNode,
}

const Title: FC<Props> = ({ children }) => {
  return (
    <h1 className='title'>
      {children}
    </h1>
  )
} 

export default Title;