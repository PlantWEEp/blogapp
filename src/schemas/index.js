import * as yup from "yup"; 

 const BasicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email-id is Required "),
  
  password: yup
    .string() 
    .required("Password is Required "), 
});
   
export {BasicSchema}