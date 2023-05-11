import { FC, useState } from "react"
import { ButtonCustom } from "."
import '../sass/_components/pagination.scss'

interface Props {
  numbers: number[]
  onClick: Function;
  className?: string,
}

const Pagination: FC<Props> = ({ numbers, onClick, className }) => {

  const [actualPage, setActualPage] = useState<number>(numbers[0])

  const onHandleClick = (num: number) => {
    setActualPage(numbers[num-1])
    onClick(num-1)
  }

  return (
    <div className={`pagination${className ? ` ${className}` : ''}`}>
      {numbers.map((num, index) =>
        <ButtonCustom
          key={index}
          onClick={onHandleClick.bind(this, num)}
          disabled={actualPage === num}
          className={actualPage === num ? 'actualPage' : 'page'}
        >
          {num}
        </ButtonCustom>)}
    </div>
  )
}

export default Pagination;