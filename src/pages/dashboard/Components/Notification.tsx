import React from "react";
import { FcLike } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
interface Notification {
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
interface notificationprops {
    item: Notification
}
const Notification: React.FC<notificationprops> = ({ item }) => {
    return (
        <div className="w-full h-[10vh] bg-gray-700 rounded-xl flex items-center justify-start px-4 py-2 gap-2 z-50" >
            {item.type == "comment" ? <div className=" flex border-2 border-blue-400 bg-blue-400/10 items-center justify-center w-12 h-12 rounded-full"  >
                <FcAbout size={25} /> </div>
                : <div className=" flex border-2 border-red-400 bg-red-400/10 items-center justify-center w-12 h-12 rounded-full"  >
                    <FcLike size={30} /> </div>
            }
            <div>
                <h1>{item.sender.name}</h1>
                <p className="text-sm" >{item.message}</p>
            </div>
        </div>
    )
}

export default Notification
