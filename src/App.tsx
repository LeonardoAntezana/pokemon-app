import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import './app.scss'

import Home from './pages/Home'
import Details from './pages/Details'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/details/:idPokemon' Component={Details}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
