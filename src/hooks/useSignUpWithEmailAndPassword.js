// useSignUpWithEmailAndPassword.js
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth);
   
    const onSubmit = async (values, actions) => {
        try {
          console.log("Submitting form with values:", values); 
          const newUser = await createUserWithEmailAndPassword(values.email, values.password);
      
          if (!newUser && error) {
            console.log("Error creating user:", error.message);
            return;
          }
      
          if (newUser) {
            console.log("User created successfully:", newUser.user);
      
            const userDoc = {
              uid: newUser.user.uid,
              email: values.email,
              UserName: values.userName,
              fname: values.fname,
              bio: "",
              profilePicURL: "",
              followers: [],
              following: [],
              posts: [],
              createdAt: Date.now(),
            };
      
            console.log("User document to be stored:", userDoc);
      
            await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
            localStorage.setItem("user-info", JSON.stringify(userDoc));
      
            console.log("Registration successful. User logged in:", userDoc);
      
            // Ensure that loginUser is defined and called appropriately
            if (typeof loginUser === 'function') {
              loginUser(userDoc);
            } else {
              console.log("Login function not defined");
            }
          }
        } catch (error) {
          console.error("Error during registration:", error.message);
        }
      };
      

    return { loading, error, onSubmit };
};

export default useSignUpWithEmailAndPassword;
