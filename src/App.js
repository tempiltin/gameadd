import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Pages/Home"
import About from "./Pages/About"
import Navbar from './Components/Navbar/Navbar'
import NotFound404 from './Pages/NotFound404'
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />}/>
      <Route path='*' element={<NotFound404 />}/>
    </Routes>
    </>
  )
}

export default App