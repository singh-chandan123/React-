import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from './Homepage'
import Contact from './Contact'
import About from './About'
const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Homepage/>} />
    <Route path='/contactus' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
  </Routes>
  )
}

export default App