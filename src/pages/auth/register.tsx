import image1 from "../../assets/login/farzan-lelinwalla-smF7sWrxFyw-unsplash.jpg"
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useState } from "react";
import { useMutation } from "@tanstack/react-query"
import { SubmitRegisterData, SubmitOtpData } from "../../api/auth/Login"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";
interface FormValues {
    email: string,
    password: string,
    name: string
}
interface EmailverificationValues {
    otp: number | undefined
}

const Register = () => {
    const [emailVerificationsection, setemailVerificationsection] = useState<boolean>(false)
    const navigate = useNavigate()

    const registerMutation = useMutation({
        mutationKey: ["register"],
        mutationFn: SubmitRegisterData,
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
                setemailVerificationsection(true);

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
            console.log(err)
        }
    })
    const otpMutation = useMutation({
        mutationKey: ["register"],
        mutationFn: SubmitOtpData,
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
            console.log(err)
        }
    })

    const initialValuesC: FormValues = {
        email: "",
        password: "",
        name: ""
    }

    const verificationinitialValues: EmailverificationValues = {
        otp: undefined
    }


    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("That ain't an email. Just like your career, it’s going nowhere. 📉")
            .required("No email? Wow. Just like your love life, it's completely empty. 💀"),

        password: Yup.string()
            .min(8, "8+ characters required. Even your ex lasted longer than this. 💔")
            .matches(/[A-Z]/, "No uppercase? Just like your confidence, **this is nonexistent.** 😭")
            .matches(/[a-z]/, "No lowercase? Even your **bank balance** has more variety. 💸")
            .matches(/[0-9]/, "No numbers? Just like your **IQ score**, it's disappointingly low. 🧠")
            .matches(/[@$!%*?&]/, "No special character? This password is as basic as your **personality.** 🙃")
            .required("No password? Ah, classic. Avoiding effort—just like you do in **everything else.** 😏"),
        name: Yup.string()
            .min(3, "Too short. Just like your patience when your ex left you on read. 📵")
            .max(15, "Too long. Stop overcompensating—no one’s impressed, champ. 🤡")
            .matches(/^[a-zA-Z0-9_]+$/, "Invalid characters. What is this, a secret code to get back into your ex’s life? 💀")
            .required("No username? Just like your social life—**completely empty.** 😭")
    });
    const emailverificationschema = Yup.object().shape({
        otp: Yup.string()
            .required("OTP missing? Wow. Even scammers are better at this than you. 📵")
            .matches(/^\d{6}$/, "Wrong format. Bro, it's a 6-digit code, not your life’s mistakes. 🤦‍♂️")
        // .length(6, "Six digits, genius. Not five. Not seven. Were you dropped as a child? 😭")
    });

    const formik = useFormik({
        initialValues: initialValuesC,
        validationSchema: validationSchema,
        onSubmit: (values: FormValues) => {
            console.log(values);
            registerMutation.mutate(values)
        }
    })
    const verificationformik = useFormik({
        initialValues: verificationinitialValues,
        validationSchema: emailverificationschema,
        onSubmit: (values: EmailverificationValues) => {
            otpMutation.mutate({ ...values, email: formik.values.email })
            navigate("/dashboard/home")
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
            {emailVerificationsection ? <div className="flex items-center justify-center w-screen lg:w-[40vw] text-gray-300 h-[95vh] rounded-3xl shadow-black  bg-cover bg-center"><form className="w-[80%] " onSubmit={verificationformik.handleSubmit} >
                <h1 className="text-4xl" >Email Verification</h1>
                <p>Sent to {formik.values.email}</p>
                <br />
                <div className="w-full mb-4">
                    <label className="w-full " htmlFor="email">OTP <span className="text-red-500" >*</span> </label>
                    <input placeholder="XXXXXX" type="number" id="otp"
                        onChange={verificationformik.handleChange}
                        onBlur={verificationformik.handleBlur}
                        value={verificationformik.values.otp} className="mb-2 mt-2 px-3 w-full border-2 border-gray-500 rounded-md h-[6vh]" />
                    {(verificationformik.touched.otp && verificationformik.errors.otp) ? <p className="text-xs text-red-800" >{verificationformik.errors.otp}</p> : null}
                </div>
                <button type="submit" className="w-full h-[6vh] mb-4 transition duration-300 ease-in-out hover:bg-blue-600 bg-blue-700 font-extrabold rounded-md mt-4 " >Continue</button>
                <p className="text-center text-md" >Wrong email ? <span onClick={() => setemailVerificationsection(false)} className="cursor-pointer text-blue-300 " >Register</span></p>
            </form> </div> :

                <div className="flex items-center justify-center w-screen lg:w-[40vw] text-gray-300 h-[95vh] rounded-3xl shadow-black  bg-cover bg-center">
                    <form className="w-[80%] " onSubmit={formik.handleSubmit} >
                        <h1 className="text-4xl" >Join Now</h1>
                        <p>Start with new conversation</p>
                        <br />
                        <div className="w-full mb-4">
                            <label className="w-full " htmlFor="email">Email <span className="text-red-500" >*</span> </label>
                            <input placeholder="name@example.xyz" type="email" id="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email} className="mb-2 mt-2 px-3 w-full border-2 border-gray-500 rounded-md h-[6vh]" />
                            {(formik.touched.email && formik.errors.email) ? <p className="text-xs text-red-800" >{formik.errors.email}</p> : null}
                        </div>
                        <div className="w-full mb-4">
                            <label className="w-full " htmlFor="email">Username <span className="text-red-500" >*</span> </label>
                            <input placeholder="example" type="text" id="name"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name} className="mb-2 mt-2 px-3 w-full border-2 border-gray-500 rounded-md h-[6vh]" />
                            {(formik.touched.name && formik.errors.name) ? <p className="text-xs text-red-800" >{formik.errors.name}</p> : null}
                        </div>
                        <div className="w-full mb-4">

                            <label className="w-full " htmlFor="email">Password <span className="text-red-500" >*</span></label>
                            <input placeholder="XXXXXXXXXXXX" type="text" id="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password} className="mb-2 px-3 mt-2 w-full border-2 border-gray-500 rounded-md h-[6vh]" />
                            {(formik.touched.password && formik.errors.password) ? <p className="text-xs text-red-800" >{formik.errors.password}</p> : null}
                        </div>

                        {registerMutation.isPending ? <button type="submit" disabled className="w-full flex items-center justify-center h-[6vh] mb-4 transition duration-300 ease-in-out hover:bg-blue-600 bg-blue-700 font-extrabold rounded-md mt-4 " ><div className="loader"></div></button> :
                            <button type="submit" className="w-full h-[6vh] mb-4 transition duration-300 ease-in-out hover:bg-blue-600 bg-blue-700 font-extrabold rounded-md mt-4 " >Register</button>

                        }
                        <p className="text-center text-md" >Already have an account ? <Link to={"/auth/login"} className=" text-blue-300 " >Login</Link></p>
                    </form>
                </div>}
        </div>
    )
}

export default Register
