import { useFormik } from "formik";
import { BasicSchema } from "../../schemas";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const onSubmit = async (values, actions) => {
  console.log(values, "hiii");
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

  return (
    <>
      <div className="relative">
        <div className="min-h-screen flex items-center justify-center bg-[url('./assets/Login.png')] bg-auto bg-no-repeat bg-right relative lg:bg-[url('./assets/black.jpg')]">
          <div className="mr-[210px] lg:w-[90%] lg:m-auto bg-skin-whitecolor p-8 rounded w-[550px] ">
            <form onSubmit={handleSubmit} autoComplete="off">
              <h4 className="mb-4 font-bold text-custom-h4">Welcome Back</h4>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-black text-custom-p font-medium mb-2"
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

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className=" block text-black text-custom-p font-medium mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`input-field ${
                    errors.password && touched.password ? "input-error" : ""
                  } w-[100%] px-[14px] py-[8px]
                   border-black border-[1px] placeholder-gray-400 text-custom-p rounded-[5px]`}
                />
                {errors.password && touched.password && (
                  <p className="error text-red-600 text-custom-p font-medium ">
                    {errors.password}
                  </p>
                )}
                <p className="text-custom-p mt-[9px]">
                  Need help?{" "}
                  <Link to="/auth/forgotpassword">Forgot password</Link>
                </p>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full  bg-green-900 text-white font-normal  py-[8px] rounded-[5px] "
              >
                Login
              </button>
              <div className="mt-4 flex items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <div className="mx-5 text-gray-500">or</div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            </form>
            <button className="mt-4 w-[100%] gap-4 flex items-center  justify-center bg-white text-black py-2 px-4 rounded-[5px] font-normal border-black border-[1px]">
              <FcGoogle className="text-[25px]" /> Sign up with Google
            </button>

            <p className="text-custom-p flex items-center justify-center mt-[12px]">
              New here?{" "}
              <Link className="text-skin-primary" to="/auth/register">
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
