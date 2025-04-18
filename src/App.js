import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './component/Narbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    
  )
}

export default App
