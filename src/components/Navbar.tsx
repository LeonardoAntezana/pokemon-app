import '../sass/_components/navbar.scss'
import { NavLink } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='navbar__title'>POKEMON API</span>
      <div className='navbar__right'>
        <NavLink to='/favorites' className='navbar__link'>
          {({isActive}) => <BsFillStarFill color={isActive ? 'white' : '#856f6f'} size={20}/>}
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;