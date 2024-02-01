import { useState } from 'react' 
import './App.css'
import Login from './components/authfrom/Login'
import Signup from './components/authfrom/Signup'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homecard from './components/authfrom/Homecard'
import Header from './schemas/header'
import Homepage from './pages/Homepage'

function App() { 


  return (
    <>
     <Routes>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<Signup/>}/>
      <Route path="/auth/homecard" element={<Homecard/>}/>
      <Route path="/auth/header" element={<Header/>}/>
      <Route path="/auth/homepage" element={<Homepage/>}/>

     </Routes>
     
      </>
    
  )
}

export default App
