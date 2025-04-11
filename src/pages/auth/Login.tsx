import image1 from "../../assets/login/farzan-lelinwalla-smF7sWrxFyw-unsplash.jpg"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useMutation } from "@tanstack/react-query"
import { SubmitLoginData } from "../../api/auth/Login"
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
interface FormValues {
  email: string,
  password: string
}

const Login = () => {
  const navigate = useNavigate()
  const loginMutation = useMutation({
    mutationKey: ["login"],
    mutationFn: SubmitLoginData,
    onSuccess: (data) => {
      if (data.data.status == true) {
        toast.success(data.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        navigate("/dashboard/home")
      }
      else {
        toast.error(data.data.message, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    },
    onError: (err) => {
      toast.error(err.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  })

  const initialValues: FormValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("That ain't an email. Just like your career, it’s going nowhere. 📉")
      .required("No email? Wow. Just like your love life, it's completely empty. 💀"),

    password: Yup.string()
      .min(8, "8+ characters required. Even your ex lasted longer than this. 💔")
      .required("No password? Ah, classic. Avoiding effort—just like you do in **everything else.** 😏")
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values: FormValues) => {
      loginMutation.mutate(values)
    }
  })

  return (
    <div className='m-2 md:m-4 flex items-center gap-10' >
      <div className="hidden lg:block w-[55vw] h-[95vh] rounded-3xl shadow-black  bg-cover bg-center"
        style={{ backgroundImage: `url(${image1})` }}>
        <div className="flex items-center justify-between flex-col inset-0 bg-gradient-to-b from-black/100 via-transparent to-black/100 rounded-3xl h-full p-4">
          <div className="flex items-center w-full px-8 pt-4 justify-between">
            <div className="text-white text-md ">Eco-reddit</div>
            <div className="flex items-center h-full justify-center gap-2 text-white text-md bg-gray-400/15 px-6 hover:bg-gray-400/60 cursor-pointer py-1 rounded-full ">  Back to home <FaArrowRight /> </div>
          </div>
          <div className="text-center text-4xl pb-8 font-extrabold drop-shadow-md ">Sustainable <br /> Development Discussion</div>
        </div>
      </div>
      <div className="flex items-center justify-center w-screen lg:w-[40vw] text-gray-300 h-[95vh] rounded-3xl shadow-black  bg-cover bg-center">
        <form className="w-[80%] " onSubmit={formik.handleSubmit} >
          <h1 className="text-4xl" >Welcome back!</h1>
          <p>Get back to the conversation</p>
          <br />
          <div className="w-full mb-4">
            <label className="w-full " htmlFor="email">Email <span className="text-red-500" >*</span> </label>
            <input placeholder="name@example.xyz" type="email" id="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email} className="mb-2 mt-2 px-3 w-full border-2 border-gray-500 rounded-md h-[6vh]" />
            {(formik.touched.email && formik.errors.email) ? <p className="text-sm text-red-600" >{formik.errors.email}</p> : null}
          </div>
          <div className="w-full mb-4">

            <label className="w-full " htmlFor="email">Password <span className="text-red-500" >*</span></label>
            <input placeholder="XXXXXXXXXXXX" type="text" id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password} className="mb-2 px-3 mt-2 w-full border-2 border-gray-500 rounded-md h-[6vh]" />
            {(formik.touched.password && formik.errors.password) ? <p className="text-sm text-red-600" >{formik.errors.password}</p> : null}
          </div>
          <div className="flex items-center justify-between" >
            <div className="flex items-center justify-start gap-2" >
              <input type="checkbox" name="remember_me" id="remember_me" width="30" className="accent-blue-500 w-4 h-4" /><label htmlFor="remember_me">Remember me</label>
            </div>
            <div>
              <span className="text-blue-300" >Forgot password ?</span>
            </div>
          </div>
          {loginMutation.isPending ? <button type="submit" disabled className="w-full flex items-center justify-center h-[6vh] mb-4 transition duration-300 ease-in-out hover:bg-blue-600 bg-blue-700 font-extrabold rounded-md mt-4 " ><div className="loader"></div></button> :
            <button type="submit" className="w-full h-[6vh] mb-4 transition duration-300 ease-in-out hover:bg-blue-600 bg-blue-700 font-extrabold rounded-md mt-4 " >Login</button>

          }
          <p className="text-center text-md" >Don't have an account ? <Link to={"/auth/register"} className=" text-blue-300 " >Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login
