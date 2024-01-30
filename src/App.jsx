import { useState } from 'react' 
import './App.css'
import Login from './components/authfrom/Login'
import Signup from './components/authfrom/Signup'
import { Route, Routes, useLocation } from 'react-router-dom'

function App() { 


  return (
    <>
     <Routes>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<Signup/>}/>
     </Routes>

     
      </>
    
  )
}

export default App
