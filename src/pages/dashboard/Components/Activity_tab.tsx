import { useEffect, useState } from 'react';
import Notification from './Notification'
import { IoClose } from "react-icons/io5";
import axios from 'axios';
type props = {
    closeHandler: () => void;
}
interface Notificationtype {
    _id: string;
    createdAt: string;
    isRead: boolean;
    message: string;
    type: "comment" | string; // You can expand this union with other types if needed
    post: {
        _id: string;
    };
    recipient: string;
    sender: {
        _id: string;
        name: string;
    };
    __v: number;
}
const Activity_tab: React.FC<props> = ({ closeHandler }) => {
    const [notificationarr, setnotificationarr] = useState<Notificationtype[]>([])
    const closewithapihandle = async () => {
        closeHandler()
        const notificationIds = notificationarr.map(notification => notification._id);
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/notification/mark-read`, { notificationIds }, {
            withCredentials: true,
        })

    }

    useEffect(() => {
        const fetchdata = async () => {
            const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/notification`, {
                withCredentials: true,
            })
            console.log(result.data)
            setnotificationarr(result.data.notifications)
        }
        fetchdata();
    }, []);

    return (
        <div className='w-full h-full bg-gray-900/70 z-50'  >
            <div className='overflow-y-auto gap-4 flex flex-col w-[40%] bg-gray-900 h-full px-4 py-6' >
                <div className='flex items-center justify-between' >
                    <h1 className=' sticky' >Recent Activity</h1>
                    <div onClick={closewithapihandle} className='p-1 hover:bg-gray-700 cursor-pointer rounded-xl' ><IoClose /></div>
                </div>
                {
                    notificationarr.map((item, index) => {
                        return <Notification key={index} item={item} />
                    })
                }
                {
                    notificationarr.length == 0 && <div className='text-gray-400 text-center'>No recent activity</div>
                }
            </div>
        </div>
    )
}

export default Activity_tab
