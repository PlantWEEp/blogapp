//register.js

import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const RegisterSchema = yup.object().shape({

    email: yup.string().email("Please enter a valid email").required("Email-id is Required "),
    fname: yup.string().required("Full name is required"),
    password: yup.string().matches(passwordRules, "Please create a stronger password").required("1 upper case letter, 1 lower case letter, 1 numeric digit"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
  });