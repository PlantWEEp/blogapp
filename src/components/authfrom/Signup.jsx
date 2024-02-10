//Signup.js
import { useFormik } from "formik";
import { RegisterSchema } from "../../schemas/register";
import { Link } from "react-router-dom";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";

const Signup = () => {
  const { loading, error, onSubmit } = useSignUpWithEmailAndPassword();

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      fullName: "", // Add fullName field
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, actions) => {
      await onSubmit(values); // Call the onSubmit function returned by useSignUpWithEmailAndPassword
      actions.resetForm();
    },
  });

  return (
    <div className="bg-skin-base relative min-h-screen flex items-center justify-center bg-[url('./assets/Login.png')] bg-auto bg-no-repeat bg-right">
      <div className="mr-[210px]">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="bg-skin-whitecolor p-8 rounded shadow-md w-[779px] "
        >
          <h4 className="mb-4 font-bold text-custom-h4 flex items-center justify-center">Welcome Back</h4>
          <p className="mb-[15px]  text-custom-p flex items-center justify-center">Enter your details below to create your account and get started</p>

          <div className="grid grid-cols-2 gap-4 mb-4">

            {/* First Row */}
            <div>
                <label
                  htmlFor="email"
                  className="block text-black text-sm links-p mb-2"
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


            <div>
              <label htmlFor="fname" className="block text-black text-sm links-p mb-2">
                Full Name</label>
              <input
                id="fname"
                type="string"
                placeholder="Enter your first name"
                value={values.fname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input-field ${errors.fname && touched.fname ? "input-error" : ""}
                  px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full`}
              />
              {errors.fname && touched.fname && <p className="error text-red-600">{errors.fname}</p>}
            </div>

            {/* Second Row */}
            <div>
              <label htmlFor="password" className="block text-black text-sm links-p mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input-field ${errors.password && touched.password ? "input-error" : ""
                  } px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full`}
              />
              {errors.password && touched.password && (
                <p className="error text-red-600">{errors.password}</p>
              )}
            </div>

            {/* <div>
              <label htmlFor="confirmPassword" className="block text-black text-sm links-p mb-2">
                Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input-field ${errors.confirmPassword && touched.confirmPassword ? "input-error" : ""} 
                px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full`}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="error text-red-600" >{errors.confirmPassword}</p>
              )}
            </div> */}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-900 text-skin-textwhite mb-2 px-[25px] py-[8px] border-black border-[1px] text-sm custom-p rounded-[5px] "
            >
              Register
            </button>

            <p className="mb-[15px] text-custom-p flex items-center justify-center w-full">Already Have an Account?<Link to="#">Login</Link></p>

          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
