import axios from 'axios';

interface loginData {
    email: string,
    password: string
}

interface registerData {
    email: string,
    name: string,
    password: string
}
interface otpData {
    email: string,
    otp: number | undefined,
}
interface discusionData {
    discussion: string,
    category:string,
    images:null
}

const SubmitLoginData = async (data: loginData) => {
    const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, data, {
        withCredentials: true,
    })
    console.log(result)
    return result
}
const SubmitRegisterData = async (data: registerData) => {
    const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, data, {
        withCredentials: true,
    })
    console.log(result)
    return result
}
const SubmitOtpData = async (data: otpData) => {
    const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/verify-otp`, data, {
        withCredentials: true,
    })
    console.log(result)
    return result
}
const SubmitdiscussionData = async (data: discusionData) => {
    const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/discussion/create`, {title:"testing data",...data}, {
        withCredentials: true,
    })
    console.log(result)
    return result
}



export { SubmitLoginData, SubmitRegisterData, SubmitOtpData , SubmitdiscussionData }


