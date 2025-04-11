import { FaPlus } from "react-icons/fa6";
import React from "react";
interface CommentDetails {
    _id: string;
    content: string;
    dateTime: string;
    user: {
        _id: string;
        username: string;
    };
}
interface DiscussionProps {
    data: CommentDetails
}

const Comment: React.FC<DiscussionProps> = ({ data }) => {
    return (
        <div className="flex flex-col w-full items-start justify-start gap-4 border-2 py-4 px-8 border-gray-500 rounded-xl" >
            <div className="w-full flex items-start justify-start gap-4" >
                <img src="https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg" className="h-10 w-10 rounded-full" alt="" />
                <div className="w-full" >
                    <div className="flex w-full items-center justify-between " >
                        <div>
                            <h1 className="text-md" >{data.user.username}</h1>
                            <p className="text-xs pb-4" >Producer</p>
                        </div>
                        <div className="px-6 py-1 gap-2 cursor-pointer rounded-full flex items-center  bg-blue-500/50">
                            <FaPlus />follow
                        </div>
                    </div>
                    <p>{data.content}</p>

                    {/* <div className="h-[5vh] mt-2 flex items-center justify-between" >
                        <div><FcLike /></div>
                        <div className="flex w-fit  items-center gap-1" >
                        </div>
                    </div> */}

                </div>

            </div>


        </div>
    )
}

export default Comment
