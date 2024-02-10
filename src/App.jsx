import { useState } from 'react' 
import './App.css'
import Login from './components/authfrom/Login'
import Signup from './components/authfrom/Signup'
import { Route, Routes, useLocation } from 'react-router-dom'

import ForgotPassword from './components/authfrom/ForgotPassword'
import Homepage from './pages/Homepage'
import Searchpage from './pages/Searchpage'

function App() { 


  return (
    <>
   {!isAdminRoute && <Header />}
     <Routes>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<Signup/>}/>
      <Route path='/auth/forgotpassword' element={<ForgotPassword/>} />
      <Route path="/home" element={<Homepage/>}/>
      <Route path="/explore" element={<Searchpage/>}/>
      



     </Routes>


      </>

  )
}

export default App;
