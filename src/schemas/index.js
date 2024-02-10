import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 8 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

 const BasicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Email-id is Required "),
  
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "1 upper case letter, 1 lower case letter, 1 numeric digit" })
    .required("Password is Required "), 
});

const otpSchema = yup.object().shape({
  digitoneOne: yup
    .string()
    .matches(/^\d$/, "OTP should be a single digit")
    .required("Please enter OTP digit"),

  digitoneTwo: yup
    .string()
    .matches(/^\d$/, "OTP should be a single digit")
    .required("Please enter OTP digit"),

  digitonThree: yup
    .string()
    .matches(/^\d$/, "OTP should be a single digit")
    .required("Please enter OTP digit"),

  digitoneFour: yup
    .string()
    .matches(/^\d$/, "OTP should be a single digit")
    .required("Please enter OTP digit"),

  digitoneFive: yup
    .string()
    .matches(/^\d$/, "OTP should be a single digit")
    .required("Please enter OTP digit"),

  digitoneSix: yup
    .string()
    .matches(/^\d$/, "OTP should be a single digit")
    .required("Please enter OTP digit")
});



export {BasicSchema,otpSchema}