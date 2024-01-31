//register.js

import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const RegisterSchema = yup.object().shape({
    age: yup.number().positive().integer().required("Age is required"),
    fname: yup.string().required("First name is required"),
    lname: yup.string().required("Last name is required"),
    profession: yup.string().required("Profession is required"),
    gender: yup.string().required("Gender is required"),
    location: yup.string().min(5).required("Location is required"),
    password: yup.string().matches(passwordRules, "Please create a stronger password").required("1 upper case letter, 1 lower case letter, 1 numeric digit"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Required"),
  });