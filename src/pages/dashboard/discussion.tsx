import { FaPlus } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import Textarea from '@mui/joy/Textarea';
import Comment from "./Components/Comment";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
const Discussion = () => {


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
                            <h1 className="text-md" >username</h1>
                            <p className="text-xs" >Producer</p>
                        </div>
                    </div>
                    <div className="px-6 py-1 gap-2 cursor-pointer rounded-full flex items-center  bg-blue-500/50">
                        <FaPlus />follow
                    </div>
                </div>
                {/* 80 words max */}
                <div className="flex h-fit max-h-[40vh] overflow-hidden my-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, delectus quam vero odio molestias iure porro pariatur a, eveniet soluta cum nihil minus necessitatibus dignissimos debitis molestiae ab excepturi temporibus ut sequi eaque! Doloribus a asperiores dolorum placeat? Quo, ipsa! Accusamus itaque esse ad exercitationem, et consequatur tenetur, placeat amet dicta commodi officia rem illo modi dolorem? Totam neque excepturi pariatur libero recusandae quam quos, tenetur odio aliquam labore. Minima iste quo eum obcaecati aut labore perspiciatis quis officiis quae? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga delectus pariatur assumenda quasi necessitatibus est ab ipsam suscipit laboriosam quis facere quam porro rem consequuntur sequi voluptatibus odit numquam magnam et, eaque alias ut beatae. Tempore enim quod eaque consequuntur tenetur illo, saepe vel deleniti sed iusto repellat rem recusandae ad voluptatum a delectus esse hic doloribus assumenda cumque. Labore quidem sunt cumque omnis cupiditate architecto facilis consequuntur veniam? Illum, ut. Repellendus unde minus aliquid a harum sint. Repellat incidunt similique, distinctio nulla earum inventore porro rem quo laudantium eum, mollitia, aut iusto quos. Recusandae rem odit quasi, perspiciatis quod inventore. Voluptates laborum reiciendis accusantium saepe fugit ducimus facilis temporibus harum, suscipit cupiditate provident impedit, necessitatibus nemo! Omnis, natus! Assumenda, dolor molestias. Ex rerum velit vel dignissimos accusantium nihil iste molestias quis, ab, saepe possimus. Quis labore saepe dicta vel ducimus corporis quas eum possimus? Obcaecati debitis veniam et cumque atque nisi accusantium deleniti eaque dolor quos optio totam, delectus reprehenderit doloremque corrupti vel quis aspernatur animi recusandae soluta. Excepturi natus est voluptas facilis necessitatibus ipsam, modi tempora laboriosam nostrum aut molestias aspernatur ipsum! Expedita aliquid voluptatem nesciunt asperiores a neque aliquam iste delectus maxime obcaecati! Minima provident possimus architecto.
                </div>
                <div className="h-[5vh] border-t-2 border-gray-600 mt-2 flex items-center justify-between" >
                    {/* <div><FcLike /></div> */}
                    <div className="flex w-fit  items-center gap-1" >
                        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" ><FaRegHeart />9</div>
                        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" ><GoCommentDiscussion />9 </div>
                    </div>
                    {/* <div className=" bg-blue-500/80 px-4 rounded-full  cursor-pointer flex items-center gap-2 ">Expand more <FaAngleDoubleRight /></div> */}
                    <div className="w-fit  flex items-center justify-end gap-4 cursor-pointer " >
                        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" ><FiShare />Share </div>
                        <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" ><FaRegBookmark />Save </div>
                    </div>

                </div>
            </div>
            <div className="w-full h-fit mt-6 border-2 border-gray-500 rounded-xl flex items-center justify-stretch px-2 py-2  " >
                <Textarea
                    minRows={2}
                    size="md"
                    variant="plain"
                    placeholder="Add a comment...."
                    sx={{
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
                <button className="px-4 bg-blue-500/50 mr-4 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-400" >Comment <PiPaperPlaneTiltBold size={15} /></button>
            </div>
            <h1 className="py-6" >Comments</h1>
            <div className="flex flex-col gap-4" >
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    )
}

export default Discussion
