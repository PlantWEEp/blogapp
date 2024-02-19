import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth, firestore } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore"; 
import {toast} from "react-toastify"


const useLogin = () => {
	
	const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);

	const login = async (inputs) => { 
		try {
			const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password); 
			if (userCred) { 
				const docRef = doc(firestore, "users", userCred.user.uid);
				const docSnap = await getDoc(docRef);
				localStorage.setItem("user-info", JSON.stringify(docSnap.data())); 
			}
		} catch (error) {
			console.log( error );
			toast.error("login error");
		}
	};

	return { loading, error, login };
};

export default useLogin;