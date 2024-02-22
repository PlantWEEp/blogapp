import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
	const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
	const navigate = useNavigate();
  
	const login = async (inputs) => {
	  try {
		const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);
		if (userCred.user) {
		  const docRef = doc(firestore, "users", userCred.user.uid);
		  const docSnap = await getDoc(docRef);
		  navigate('/');
		  localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
		} 
	  } catch (error) {
		console.error("new error",error);
		toast.error("Login failed. Please check your email and password.");
	  }
	};
  
	return { loading, error, login };
  };
  
  export default useLogin;
  
