import { useFormik } from "formik";
import { BasicSchema } from "../../schemas";
import { Link } from "react-router-dom"; 




const onSubmit = async (values, actions) => {
  console.log(values ,"hiii");
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
            <form
              onSubmit={handleSubmit}
              autoComplete="off" 
            >
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
                  Need help? <Link to="/auth/forgotpassword">Forgot password</Link>
                </p>
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
            </form>
          <button className="mt-4 w-[100%] flex items-center justify-center bg-white text-black py-2 px-4 rounded-[5px] font-normal border-black border-[1px]">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-6 w-6 mr-2" fill="none">
        <path fill="#167ee6" d="M492.668 211.489-208.84.001c-9.222 0-16.697 7.474-16.697 16.696v66.715c0 9.22 7.475 16.696 16.696 16.696h117.606c-12.878 33.421-36.914 61.41-67.58 79.194L384 477.589c80.442-46.523 128-128.152 128-219.53 0-13.011-.959-22.312-2.877-32.785-1.458-7.957-8.366-13.785-16.455-13.785z"/>
        <path fill="#12b347" d="M256 411.826c-57.554 0-107.798-31.446-134.783-77.979l-86.806 50.034C78.586 460.443 161.34 512 256 512c46.437 0 90.254-12.503 128-34.292v-.119l-50.147-86.81c-22.938 13.304-49.482 21.047-77.853 21.047z"/>
        <path fill="#0f993e" d="M384 477.708v-.119l-50.147-86.81c-22.938 13.303-49.48 21.047-77.853 21.047V512c46.437 0 90.256-12.503 128-34.292z"/>
        <path fill="#ffd500" d="M100.174 256c0-28.369 7.742-54.91 21.043-77.847l-86.806-50.034C12.502 165.746 0 209.444 0 256s12.502 90.254 34.411 127.881l86.806-50.034c-13.301-22.937-21.043-49.478-21.043-77.847z"/>
        <path fill="#ff4b26" d="M256 100.174c37.531 0 72.005 13.336 98.932 35.519 6.643 5.472 16.298 5.077 22.383-1.008l47.27-47.27c6.904-6.904 6.412-18.205-.963-24.603C378.507 23.673 319.807 0 256 0 161.34 0 78.586 51.557 34.411 128.119l86.806 50.034c26.985-46.533 77.229-77.979 134.783-77.979z"/>
        <path fill="#d93f21" d="M354.932 135.693c6.643 5.472 16.299 5.077 22.383-1.008l47.27-47.27c6.903-6.904 6.411-18.205-.963-24.603C378.507 23.672 319.807 0 256 0v100.174c37.53 0 72.005 13.336 98.932 35.519z"/>
    </svg>
    Sign up with Google
</button>


              <p className="text-custom-p flex items-center justify-center mt-[12px]">
                New here?{" "}
                <Link className="text-skin-primary" to="/home">
                  {" "}
                  Sign up for free{" "}
                </Link>
              </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
