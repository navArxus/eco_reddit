import { FaPlus } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import Textarea from '@mui/joy/Textarea';
import Comment from "./Components/Comment";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { useNavigate, useParams } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from 'react-toastify';

interface CommentDetails {
    _id: string;
    content: string;
    dateTime: string;
    user: {
        _id: string;
        username: string;
    };
}
interface PostDetailsResponse {
    _id: string;
    discussion: string;
    category: "producer" | "consumer" | "decomposer";
    author: {
        _id: string;
        username: string; // using `name` as `username`
    };
    likeCount: number;
    likedByUser: boolean;
    comments: CommentDetails[];
}
interface commentForm {
    comment: string;
}

const Discussion = () => {
    const [details, setdetails] = useState<PostDetailsResponse>()

    const fetchdata = async () => {
        const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/getDiscussion/details`, { discussionId: id }, {
            withCredentials: true,
        })
        setdetails(result.data)
        console.log(result.data)
    }

    useEffect(() => {
        fetchdata()
    }, []);

    const [isLiked, setIsLiked] = useState(details?.likedByUser);
    const hitLikedHandler = async () => {
        const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/discussion/like/${details?._id}`, {}, {
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
        const result = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/getDiscussion/save-discussion`, { postId: details?._id }, {
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


    const { id } = useParams()
    const formik = useFormik({
        initialValues: {
            comment: '',
        },
        validationSchema: Yup.object({
            comment: Yup.string().required('Comment is required'),
        }),
        onSubmit: async (values: commentForm) => {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/comment/create`, { postID: id, text: values.comment }, {
                withCredentials: true,
            })
            window.location.reload()

        },
    });

    const copyLink = () => {
        navigator.clipboard.writeText(`https://eco-reddit.vercel.app/dashboard/discussion/${details?._id}`).then(() => {
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




    const navigate = useNavigate();
    return (
        <div className="px-4 py-10 overflow-y-auto w-full h-full" >
            <button
                onClick={() => navigate(-1)}
                className="mb-4 px-3 cursor-pointer py-2 flex items-center gap-1 bg-gray-700 text-white rounded-lg"
            >
                <MdOutlineArrowBack /> Back
            </button>
            <div className="border-2 border-gray-500 hover:bg-gray-800/30 rounded-xl py-3 px-8 flex flex-col h-fit max-h-[45vh]" >
                <div className="h-fit flex items-center justify-between" >
                    <div className="flex items-center gap-3 ">
                        <div><img src="https://images.unsplash.com/photo-1493612276216-ee3925520721?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww" alt="" className="w-10 h-10 rounded-full" /></div>
                        <div>
                            <h1 className="text-md" >{details?.author.username}</h1>
                            <p className="text-xs" >Producer</p>
                        </div>
                    </div>
                    <div className="px-6 py-1 gap-2 cursor-pointer rounded-full flex items-center  bg-blue-500/50">
                        <FaPlus />follow
                    </div>
                </div>
                {/* 80 words max */}
                <div className="flex h-fit max-h-[40vh] overflow-hidden my-2">
                    {details?.discussion}
                </div>
                <div className="h-[5vh] border-t-2 border-gray-600 mt-2 flex items-center justify-between" >
                    {/* <div><FcLike /></div> */}
                    <div className="flex w-fit  items-center gap-1" >
                        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" onClick={hitLikedHandler} >{details?.likedByUser ? <FcLike /> : <FaRegHeart />}{details?.likeCount}</div>
                        <div className="flex items-center gap-2 px-2 rounded-xl" ><GoCommentDiscussion />{details?.comments.length} </div>
                    </div>
                    {/* <div className=" bg-blue-500/80 px-4 rounded-full  cursor-pointer flex items-center gap-2 ">Expand more <FaAngleDoubleRight /></div> */}
                    <div className="w-fit  flex items-center justify-end gap-4 cursor-pointer " >
                        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" onClick={copyLink} ><FiShare />Share </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" onClick={hitSavedHandler} ><FaRegBookmark />Save </div>
                    </div>

                </div>
            </div>
            <form onSubmit={formik.handleSubmit}>

                <div className="w-full h-fit mt-6 border-2 border-gray-500 rounded-xl flex items-center justify-stretch px-2 py-2  " >
                    <Textarea
                        className="w-full h-full p-2 border-0 rounded-lg"
                        id="comment"
                        name="comment"
                        minRows={2}
                        size="md"
                        variant="plain"
                        placeholder="Add a comment...."
                        value={formik.values.comment}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        sx={{
                            zIndex: 0,
                            backgroundColor: "transparent",
                            color: "white",
                            flex: 1,
                            '&:hover': { backgroundColor: "transparent", color: "white" },
                            '&:focus': { backgroundColor: "transparent", color: "white" },
                            '&::placeholder': { color: "rgba(255, 255, 255, 0.6)" },
                            border: "none", // Removes border
                            outline: "none",
                            '&::before': { display: "none" }, // Removes MUI's default underline
                            '&::after': { display: "none" },
                        }}
                    />
                    <button
                        type="submit"
                        className="px-4 bg-blue-500/50 mr-4 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-400" >Comment <PiPaperPlaneTiltBold size={15} />
                    </button>
                </div>
            </form>
            <h1 className="py-6" >Comments</h1>
            <div className="flex flex-col gap-4" >
                {details?.comments.map((e: CommentDetails) => {
                    return (
                        <Comment data={e} />
                    )
                })}
            </div>
        </div>
    )
}

export default Discussion
