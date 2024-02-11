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
      userName: "",  
      password: "",
      fname: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values, actions) => {
      console.log("Submitting form with values:", values);
      await onSubmit(values);
      actions.resetForm(); 
    },
    
  });

  return (
    <div className="bg-skin-base relative min-h-screen flex items-center justify-center bg-[url('./assets/Login.png')] bg-auto bg-no-repeat bg-right">
      <div className="mr-[210px]">
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
          className="bg-skin-whitecolor p-8 rounded shadow-md w-[500px]"
        >
          <h4 className="font-bold text-custom-h4 flex items-start">Sign up</h4>
          <p className="mb-[15px] text-custom-p">
            Enter your details below to create your account and get started
          </p>
          <div className="flex flex-col gap-[10px]">
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
              <label
                htmlFor="fname"
                className="block text-black text-sm links-p mb-2"
              >
                Full Name
              </label>
              <input
                id="fname"
                type="text" 
                placeholder="Enter your first name"
                value={values.fname || ""}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input-field ${
                  errors.fname && touched.fname ? "input-error" : ""
                }
      px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full`}
              />
              {errors.fname && touched.fname && (
                <p className="error text-red-600 text-custom-p font-medium ">
                  {errors.fname}
                </p>
              )}
            </div>
            <div>
            <label
              htmlFor="userName"
              className="block text-black text-sm links-p mb-2"
            >
              User Name
            </label>
            <input
              id="userName"
              name="userName"
              type="text"
              placeholder="Enter your UserName"
              value={values.userName || ""}
              onChange={handleChange}
              onBlur={handleBlur}
              className="px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full "
            />
            {errors.userName && touched.userName && (
              <p className="error text-red-600 text-custom-p font-medium ">
                {errors.userName}
              </p>
            )}
          </div>



            <div>
              <label
                htmlFor="password"
                className="block text-black text-sm links-p mb-2"
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
                } px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full`}
              />
              {errors.password && touched.password && (
                <p className="error text-red-600 text-custom-p font-medium ">
                  {errors.password}
                </p>
              )}
            </div> 
            <button
              type="submit"
              className="bg-green-900 text-skin-textBase mb-2 px-[25px] py-[8px] border-black border-[1px] text-sm custom-p rounded-[5px] "
            >
              Register
            </button>

            <p className="text-custom-p flex items-center justify-center w-full">
              Already Have an Account?<Link to="/auth/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
