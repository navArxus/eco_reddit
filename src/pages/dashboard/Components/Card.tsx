import { FaPlus } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router";
import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';
interface Discussion {
    _id: string;
    userID: {
        _id: string;
        name: string
    };
    commentID: string[];
    discussion: string;
    like: string[];
    category: string;
    dateTime: string; // ISO date string
    __v: number;
    username: string;
    isLiked: boolean
}
interface DiscussionProps {
    data: Discussion
}

const Card: React.FC<DiscussionProps> = ({ data }) => {
    const [isLiked, setIsLiked] = useState(data.isLiked);
    const hitLikedHandler = async () => {
        const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/discussion/like/${data._id}`, {}, {
            withCredentials: true,
        })
        setIsLiked(!isLiked);
        toast.info(result.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    }
    const hitSavedHandler = async () => {
        const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/getDiscussion/save-discussion`, { postId: data._id }, {
            withCredentials: true,
        })
        toast.info(result.data.message, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });

    }
    const copyLink = () => {
        navigator.clipboard.writeText(`https://eco-reddit.vercel.app/dashboard/discussion/${data._id}`).then(() => {
            toast.success("Link Copied", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }).catch(err => {
            console.log(err)
            toast.error("Error in copying link", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        });
    }

    return (
        <div className="border-2 border-gray-500 hover:bg-gray-800/30 rounded-xl py-3 px-8 flex flex-col h-fit max-h-[45vh]" >
            <div className="h-[8vh] flex items-center justify-between" >
                <div className=" flex items-center gap-3 ">
                    <div className=" border-2 flex items-center justify-center border-gray-500 text-gray-200 w-10 h-10 rounded-full" >{data?.userID.name?.charAt(0).toUpperCase()}</div>
                    <div>
                        <h1 className="text-md" >{data.userID.name}</h1>
                        <p className="text-xs" >Producer</p>
                    </div>
                </div>
                <div className="px-6 py-1 gap-2 cursor-pointer rounded-full flex items-center  bg-blue-500/50">
                    <FaPlus />follow
                </div>
            </div>
            {/* 80 words max */}
            <div className="flex h-fit max-h-[40vh] overflow-hidden my-2">
                {data.discussion}
            </div>
            <div className="h-[5vh] border-t-2 border-gray-600 mt-2 flex items-center justify-between" >
                {/* <div><FcLike /></div> */}
                <div className="flex w-fit  items-center gap-1" >
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" onClick={hitLikedHandler} >{isLiked ? <FcLike /> : <FaRegHeart />}{data.like.length}</div>
                    <div className="flex items-center gap-2  px-2 rounded-xl" ><GoCommentDiscussion />{data.commentID.length}</div>
                </div>
                {/* <div className=" bg-blue-500/80 px-4 rounded-full  cursor-pointer flex items-center gap-2 ">Expand more <FaAngleDoubleRight /></div> */}
                <div className="w-fit  flex items-center justify-end gap-4 cursor-pointer " >
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" onClick={copyLink} ><FiShare />Share </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" onClick={hitSavedHandler} ><FaRegBookmark />Save </div>
                    <Link to={`/dashboard/discussion/${data._id}`} className="flex items-center gap-2 cursor-pointer hover:bg-blue-600/50 px-2 rounded-xl" >Discussion <FaAngleRight /> </Link>
                </div>

            </div>
        </div >
    )
}

export default Card
