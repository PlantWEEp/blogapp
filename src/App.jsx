import "./App.css";
import Login from "./components/authfrom/Login";
import Signup from "./components/authfrom/Signup";
import { Route, Routes, useLocation, Navigate } from "react-router-dom"; 
import Home from "./pages/Home";
import Header from "./components/navbar/Header";
import Search from "./pages/Search";
import MenuTabs from "./components/addPost/MenuTabs";
import Profile from "./components/userProfile/Profile";
import DetailPages from "./pages/detailPages";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase/config";
import { login, logout } from "./store/features/authSlice";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/auth");

  const isAuthenticated = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout()); // Make sure to handle logout cases
      }
    });
  
    return () => {
      // Unsubscribe from the listener when the component unmounts
      unsubscribe();
    };
  }, [dispatch]);
  
  

  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Signup />} /> 
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Search />} />
        <Route
          path="/add/post"
          element={
            isAuthenticated ? <Navigate to="/auth/login" />:<MenuTabs />  
          }
        />
        <Route
          path="/user/profile"
          element={
            isAuthenticated ? <Navigate to="/auth/login" /> : <Profile />
          }
        />
        <Route path="/post/detail" element={<DetailPages />} />
      </Routes>
    </>
  );
}

export default App;
