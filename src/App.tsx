import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './app.scss'

import Home from './pages/Home'
import Details from './pages/Details'
import Favorites from './pages/Favorites'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/details/:idPokemon' Component={Details}/>
          <Route path='/favorites' Component={Favorites}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  )
}

export default App
