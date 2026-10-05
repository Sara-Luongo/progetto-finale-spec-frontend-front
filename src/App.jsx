import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Preferiti from './pages/Preferiti'
import Comparatore from './pages/Comparatore'
import TripList from './pages/TripList'
import Home from './pages/Home'



function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home />} />
          <Route path='/Trip-List' element={<TripList />} />
          <Route path='/Preferiti' element={<Preferiti />} />
          <Route path='/Comparatore' element={<Comparatore />} />
        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App
