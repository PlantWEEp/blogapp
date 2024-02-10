import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { BasicSchema } from "../../schemas";
import { otpSchema } from "../../schemas"; // Import otpSchema from your schemas

export default function ForgotPassword() {
  const [showOtp, setShowOtp] = useState(true);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState({
    digitoneOne: "",
    digitoneTwo: "",
    digitonThree: "",
    digitoneFour: "",
    digitoneFive: "",
    digitoneSix: "",
  });
  const inputRef = useRef({});  
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    setSubmitting // Add setSubmitting from useFormik to handle submission state
  } = useFormik({
    initialValues: {
      email: "",
      otp: {
        digitoneOne: "",
        digitoneTwo: "",
        digitonThree: "",
        digitoneFour: "",
        digitoneFive: "",
        digitoneSix: "",
      }
    },
    validationSchema: showOtp ? BasicSchema : otpSchema, 
    onSubmit: async (values, { setSubmitting }) => {
      // Check if showOtp is false (i.e., OTP stage)
      if (!showOtp) {
        // Check if any OTP field is invalid
        if (Object.keys(errors.otp).some(field => touched.otp[field] && errors.otp[field])) {
          // If any OTP field is invalid, prevent form submission
          console.error("OTP is not valid.");
          setSubmitting(false);
          return;
        }
      }
      // Proceed with form submission
      setEmail(values.email);
      setShowOtp(false);
      setSubmitting(true);
      // Handle further submission logic here
    },
  });

  //here is the opt input form

  const renderOtp = (keys) => {
    return Object.keys(otp).map((keys, index) => (
      <input
        maxLength="1"
        ref={(element) => (inputRef.current[index] = element)}
        key={index}
        type="text"
        name={keys}
        onChange={(event) => handleOtp(event, index)}
        onKeyUp={(event) => handleBackSpace(event, index)}
        className="border-black border-[1px] placeholder-gray-400 text-custom-p rounded-[5px] text-center mr-3 w-16 h-12 sm:w-7 sm:h-7 sm:mr-1"
      />
    ));
  };

  const handleOtp = (event, index) => {
    const { name, value } = event.target;
    setOtp((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (value && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleBackSpace = (event, index) => {
    if (event.key === "Backspace") {
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };

  return (
    <>
      <div className="flex justify-center my-[5rem]">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="bg-skin-whitecolor p-8 rounded w-[550px] lg:w-[80%] m-auto"
        >
          <div className="mb-4">
            <h4 className="font-bold text-custom-h4 ssm:text-custom-h5">
              {" "}
              Account Recovery
            </h4>
            {showOtp ? (
              <p className="text-custom-p text-whitecolor">
                Please provide the email address you used during registration.
              </p>
            ) : (
              <p>we will send you an OTP to your email inbox.</p>
            )}
          </div>
          {showOtp ? (
            <div className="mb-4">
              <label
                htmlFor="email"
                className="text-black text-custom-p font-medium mb-2"
              >
                Enter your Email-id
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={`input-field ${
                  errors.email && touched.email ? "input-error" : ""
                } w-[100%] px-[14px] py-[8px]
                      border-black border-[1px] placeholder-gray-400 text-custom-p rounded-[5px]`}
              />
              {errors.email && touched.email && (
                <p className="error text-red-600 text-custom-p font-medium ">
                  {errors.email}
                </p>
              )}
            </div>
          ) : (

            // Otp input 
            
            <div className="mb-4 text-center">
              <label
                htmlFor="password"
                className="block text-black text-custom-p font-medium mb-2 text-start"
              >
                Enter your OTP
              </label>
              {renderOtp()}
            </div>
          )}

          <button
            type="submit"
            className="w-[100%] bg-green-900 text-white font-normal  py-[8px] rounded-[5px] "
            onClick={() => setShowOtp(!true)}
          >
            {showOtp ? "Submit" : "Verfiy OTP"}
          </button>

          <p className="text-custom-p flex items-center justify-center mt-[12px]">
            {showOtp ? (
              <Link className="text-skin-primary" to="/auth/login">
                Cancel and go back to login screen
              </Link>
            ) : (
              <Link
                className="text-skin-primary"
                onClick={() => setShowOtp(!false)}
              >
                Resend OTP
              </Link>
            )}
          </p>
        </form>
      </div>
    </>
  );
}
