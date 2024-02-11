 
import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/; 

export const RegisterSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email is required"),
  fname: yup.string().required("Full name is required"),
  password: yup.string().matches(passwordRules, "Please create a stronger password").required("1 upper case letter, 1 lower case letter, 1 numeric digit"),
  userName: yup.string().required("User name is required")
});
