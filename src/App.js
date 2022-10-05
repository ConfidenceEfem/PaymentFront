import React from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import VerifyPage from './components/VerifyPage'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/verify" element={<VerifyPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App