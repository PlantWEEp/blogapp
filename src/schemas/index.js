import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const BasicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email-id is Required "),
  
  password: yup
    .string()
<<<<<<< HEAD
    .min(8)
    .matches(passwordRules, { message: "1 upper case letter, 1 lower case letter, 1 numeric digit" })
    .required("Password is Required "), 
=======
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("1 upper case letter, 1 lower case letter, 1 numeric digit "),
 
>>>>>>> d4edc0ff1d0a9c34831bbf5aa09b51fe6842eff7
});

