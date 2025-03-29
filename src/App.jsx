import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Projects from './pages/Projects';
import Navbar from './components/Navbar'
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
