//Signup.jsx

import { useFormik } from "formik";
import { RegisterSchema } from "../../schemas/register";
import { Link } from "react-router-dom";

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Signup = () => {
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
      confirmPassword: "",
      age: "",
      fname: "",
      lname: "",
      profession: "",
      gender: "",
      location: "",
    },
    validationSchema: RegisterSchema,
    onSubmit,
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
              <label htmlFor="fname" className="block text-black text-sm links-p mb-2">
                First Name</label>
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

            <div>
              <label htmlFor="lname" className="block text-black text-sm links-p mb-2">
                Last Name</label>
              <input
                id="lname"
                type="string"
                placeholder="Enter your last name"
                value={values.lname}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input-field ${errors.lname && touched.lname ? "input-error" : ""}
                  px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full`}
              />
              {errors.lname && touched.lname && <p className="error text-red-600">{errors.lname}</p>}

            </div>


            {/* Second Row */}



            <div>
              <label htmlFor="location" className="block text-black text-sm links-p mb-2">
                Location </label>
              <input
                id="location"
                type="string"
                placeholder="Enter your location"
                value={values.location}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input-field ${errors.location && touched.location ? "input-error" : ""}
                  px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full`}
              />
              {errors.location && touched.location && <p className="error text-red-600">{errors.location}</p>}

            </div>


            <div>
              <label htmlFor="age" className="block text-black text-sm links-p mb-2">
                DOB</label>
              <input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input-field ${errors.age && touched.age ? "input-error" : ""}
                px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full`}
              />
              {errors.age && touched.age && <p className="error text-red-600">{errors.age}</p>}
            </div>


            {/* third Row */}


            <div >
              <label htmlFor="gender" className="block text-black text-sm links-p mb-2">
                Gender </label>
              <input
                id="gender"
                type="string"
                placeholder="Enter your Gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input-field ${errors.gender && touched.gender ? "input-error" : ""}
                  px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full`}
              />
              {errors.gender && touched.gender && <p className="error text-red-600">{errors.gender}</p>}

            </div>

            <div >
              <label htmlFor="profession" className="block text-black text-sm links-p mb-2">
                Profession </label>
              <input
                id="profession"
                type="string"
                placeholder="Enter your profession"
                value={values.profession}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`input-field ${errors.profession && touched.profession ? "input-error" : ""}
                  px-[25px] py-[8px] border-black border-[1px] placeholder-gray-400 text-sm rounded-[5px] w-full`}
              />
              {errors.profession && touched.profession && <p className="error text-red-600">{errors.profession}</p>}

            </div>


            {/* fourth Row */}



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

            <div>
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
            </div>

            {/* fifth Row */}


            <button
              className=" mb-2 px-[20px] py-[8px] border-black border-[1px]  text-sm custom-p rounded-[5px]"
            >
              Cancel
            </button>



            <button
              disabled={isSubmitting}
              type="submit"
              className=" bg-green-900 text-white mb-2 px-[25px] py-[8px] border-black border-[1px] text-sm custom-p rounded-[5px] "
            >
              Register
            </button>

            <p className="mb-[15px] text-custom-p flex items-center justify-center w-full">Aready Have an Account?<Link to="#">Login</Link></p>


            {/* Continue adding more rows as needed */}


          </div>

        </form>
      </div>
    </div>
  );
};

export default Signup;

