// Login.jsx

import { useFormik } from "formik";
import { BasicSchema } from "../../schemas";


const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Login = () => {
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
      password: "",
    },
    validationSchema: BasicSchema,
    onSubmit,
  });

  console.log(errors);

  return (
    <>
      <div className="  bg-skin-base relative">
        <div className="min-h-screen flex items-center justify-center bg-[url('./assets/Login.png')]  bg-auto bg-no-repeat bg-right">

          <div className="mr-[210px]">
            <form onSubmit={handleSubmit} autoComplete="off" className="bg-skin-whitecolor p-8 rounded shadow-md w-[450px] ">
              <h1 className="mb-4 font-bold text-2xl" >Welcome Back</h1>
              <div className="mb-4">

                <label htmlFor="email" className="block text-black text-sm font-medium mb-2">
                  Enter your Email-id
                </label>
                <input
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  onBlur={handleBlur}
                  className={`input-field ${errors.email && touched.email ? "input-error" : "" } w-[100%] px-[25px] py-[8px]
                    border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px]`}  />

                {errors.email && touched.email && <p className="error text-red-600">{errors.email}</p>}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className=" block text-black text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input-field ${errors.password && touched.password ? "input-error" : ""} w-[100%] px-[25px] py-[8px]
                   border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px]`}
                />
                {errors.password && touched.password && <p className="error text-red-600">{errors.password}</p>}
                <p className="text-sm mt-[9px]"> <a href="#">Need help?</a> <a href="#">Forgot password</a> </p>
              </div>


              <button
                disabled={isSubmitting}
                type="submit"
                className="w-[385px]  bg-green-900 text-white font-normal  py-[8px] rounded-[5px] ">
                Login
              </button>

              <div className="mt-4 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <div className="mx-5 text-gray-500">or</div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>


              <button
                className="mt-4 w-[385px] flex items-center justify-center
                bg-white text-black py-2 px-4 rounded-[5px] font-normal border-black border-[1px]">

                <img
                  src="./assets/googlelogo.png"
                  alt="Google Logo"
                  className="mr-2 w-[20px] h-[20px]"
                />Sign up with Google
              </button>

              <p className="text-sm flex items-center justify-center mt-[12px]">New here? 
              <a className="text-green-800" href="#">Sign up for free</a> </p>


            </form>
          </div>
        </div>
      </div>
    </>
  );

};

export default Login;


