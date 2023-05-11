import { NavLink } from 'react-router-dom';
import { BsFillStarFill } from 'react-icons/bs'
import '../sass/_components/navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'>
        <h1 className='navbar__title'>POKEMON API</h1>
      </NavLink>
      <div className='navbar__right'>
        <NavLink to='/favorites' className='navbar__link'>
          {({ isActive }) => <BsFillStarFill color={isActive ? 'white' : '#856f6f'} size={20} />}
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar;