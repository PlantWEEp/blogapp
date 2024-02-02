import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { BasicSchema } from "../../schemas";
import OptScreen from "./OptScreen";

export default function ForgotPassword() {
  const [showOtp, setShowOtp] = useState(true);
  const [email, setEmail] = useState("");

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: BasicSchema,
    onSubmit: (values) => {
      setEmail(values.email);
      setShowOtp(false);
    },
  });

  const renderOtp = () => {
    return (
      <input
        type="text"
        className="border-black border-[1px] placeholder-gray-400 text-custom-p rounded-[5px] text-center mr-3 w-16 h-12"
      />
    );
  };

  return (
    <>
      <div className="flex justify-center my-[5rem]">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="bg-skin-whitecolor p-8 rounded w-[550px] lg:w-full"
        >
          <h4 className="mb-4 font-bold text-custom-h4">Welcome Back</h4>
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
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-black text-custom-p font-medium mb-2"
              >
                Enter your OTP
              </label>
              {renderOtp()}
              {renderOtp()}
              {renderOtp()}
              {renderOtp()}
              {renderOtp()}
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
              <Link className="text-skin-primary" onClick={() => setShowOtp(!false)}>
                Resend OTP
              </Link>
            )}
          </p>
        </form>
      </div>
    </>
  );
}
