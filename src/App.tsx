import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import './app.scss'

import Home from './pages/Home'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' Component={Home}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
