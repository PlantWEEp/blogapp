// useSignUpWithEmailAndPassword.js
//created
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

const useSignUpWithEmailAndPassword = () => {
    const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth);
   
    const onSubmit = async (inputs) => {
        if (!inputs.email || !inputs.password ||  !inputs.fullName) {
            console.log(error,"Please fill all the fields", "error");
            return;
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            
            if (!newUser && error) {
                console.log("Error", error.message, "error");
                return;
            }

            if (newUser) {
                const userDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullName: inputs.fullName,
                    bio: "",
                    profilePicURL: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };

                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
                loginUser(userDoc);
            }
        } catch (error) {
            console.log("Error", error.message, "error");
        }
    };

    return { loading, error, onSubmit };
};

export default useSignUpWithEmailAndPassword;
