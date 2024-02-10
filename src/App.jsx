 import './App.css'
import Login from './components/authfrom/Login'
import Signup from './components/authfrom/Signup'
import { Route, Routes, useLocation } from 'react-router-dom' 
import ForgotPassword from './components/authfrom/ForgotPassword'
import Home from './pages/Home' 
import Header from './components/navbar/Header'
import Search from "./pages/Search"

function App() {  
  const location = useLocation(); 
  const isAdminRoute = location.pathname.startsWith("/auth");
  return (
    
    <>
   {!isAdminRoute && <Header />}
     <Routes>
      <Route path="/auth/login" element={<Login/>}/>
      <Route path="/auth/register" element={<Signup/>}/>
      <Route path='/auth/forgotpassword' element={<ForgotPassword/>} />
      <Route path="/" element={<Home/>}/>
      <Route path="/explore" element={<Search/>}/> 
     </Routes> 
      </>

  )
}

export default App;
