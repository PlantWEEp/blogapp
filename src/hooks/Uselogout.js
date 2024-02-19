import React from 'react'
import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from "../firebase/config";
import {toast} from "react-toastify"


function useLogout() {

  const [signOut, loading, error] = useSignOut(auth);

  const handleLogout = async()=>{
    try {
      await signOut()
      localStorage.removeItem('userDoc')
      console.log("user logout successfuly");
      toast.success("logout successfuly");
    } catch (error) {
      toast.error("logout error");
      console.log(error);
    }
  }

  return  {handleLogout, loading, error}
}

export default useLogout