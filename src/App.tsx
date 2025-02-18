import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import History from './Pages/History'
import Achievements from './Pages/Achievements'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
