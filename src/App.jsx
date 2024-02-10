import { useState } from 'react' 
import './App.css'
import Login from './components/authfrom/Login'
import Signup from './components/authfrom/Signup'
import { Route, Routes, useLocation } from 'react-router-dom' 
import ForgotPassword from './components/authfrom/ForgotPassword'
import Homepage from './pages/Home'
import Searchpage from './pages/Search' 
import Header from './components/navbar/header' 
import MenuTabs from './components/addPost/menuTabs'
 
function App() {
  const location =useLocation()
  const isAdminRoute = location.pathname.startsWith("/auth");
  return (
    <>
   {!isAdminRoute && <Header />}
     <Routes>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<Signup/>}/>
      <Route path='/auth/forgotpassword' element={<ForgotPassword/>} />
      <Route path="/" element={<Homepage/>}/>   
      <Route path="/explore" element={<Searchpage/>}/>
      <Route path='/post/addpost' element={<MenuTabs/>} />
     </Routes>
    </>
    
  )
}

export default App;
