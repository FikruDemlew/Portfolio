import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';
function App() {

  return (
    <div className='bg-white overflow-hidden'>
        <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
    </div>
  
  )
}

export default App
