import { useState } from 'react' 
import './App.css'
import Login from './components/authfrom/Login'
import Signup from './components/authfrom/Signup'
import { Route, Routes, useLocation } from 'react-router-dom' 
import Home from './pages/Home' 
import Search from "./pages/Search"
<<<<<<< Updated upstream
import MenuTabs from './components/addPost/MenuTabs'
import Profile from './components/userProfile/Profile'
import DetailPages from "./pages/detailPages"
import ProfilePage from './pages/ProfilePage'

function App() { 

=======
import MenuTabs from "./components/addPost/MenuTabs"
>>>>>>> Stashed changes

  return (
    <>
     <Routes>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<Signup/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Search/>}/> 
      <Route path="/add/post" element={<MenuTabs/>}/> 
      <Route path="/user/profile" element={<Profile/>}/> 
      <Route path="/post/detail" element={<DetailPages/>}/> 
      <Route path="/profile" element={<ProfilePage/>}/> 
      

     </Routes> 
      </>
    
  )
}

export default App
