import { useState } from 'react' 
import './App.css'
import Login from './components/authfrom/Login'
import Signup from './components/authfrom/Signup'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ForgotPassword from './components/authfrom/ForgotPassword'

function App() { 


  return (
    <>
     <Routes>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<Signup/>}/>
      <Route path='/auth/forgotpassword' element={<ForgotPassword/>} />
      <Route path="/home" element={<Home/>}/>   
     </Routes>

     
      </>
    
  )
}

export default App
