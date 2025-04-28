import axios from "axios";
import { useEffect, useState } from "react";



const Settingpage = () => {
    const [initialData, setInitialData] = useState({
        name: "",
        userType: "",
        email: ""
    });
    
    useEffect(() => {
        const fetchData = async () => {
            const userData = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/profile`, {
                withCredentials: true,
            })
            setInitialData(userData.data.data)
            console.log(userData)
        }
        fetchData()

    }, []);
    

    return (
        <div className="flex flex-col gap-3 px-8 py-10 " >
            <div className="flex items-center justify-between rounded-xl px-8 py-6 bg-gray-800" >
                <div className="flex items-center justify-start gap-4" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRArM_LlJg-p2HNeDX3sobLEXdJe2M1gBww&s" className="w-20 h-20 rounded-full border-2 border-black shadow-md shadow-gray-900" alt="" />
                    <div>
                        <h1 className="text-xl" >{initialData.name}</h1>
                        <p>{initialData.email}</p>
                    </div>
                </div>
                <div className="flex gap-4" >
                    <input type="file" className="hidden" name="profileChange" id="profileChange" accept="image/png , image/jpg , image/jpeg" />
                    <label htmlFor="profileChange" className="bg-gray-800 cursor-pointer px-4 py-2 rounded-lg" >
                        Change photo
                    </label>
                    <button className="border-2 border-red-400 px-4 py-2 cursor-pointer rounded-lg text-red-400" >
                        Delete photo
                    </button>
                </div>
            </div>
            
            <div className="flex items-center justify-between rounded-xl px-8 py-6 bg-gray-800" >
                <div className="flex items-center justify-start gap-4" >
                    Logout this session
                </div>
                <div className="flex gap-4" >
                    <button className="border-2 border-red-400 px-4 py-2 rounded-lg text-red-400" >
                        Logout
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between rounded-xl px-8 py-6 bg-gray-800" >
                <div className="flex items-center justify-start gap-4" >
                    Deactivate this Account
                </div>
                <div className="flex gap-4" >
                    <button className="border-2 border-red-400 px-4 py-2 rounded-lg text-red-400" >
                        Deactivate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Settingpage
