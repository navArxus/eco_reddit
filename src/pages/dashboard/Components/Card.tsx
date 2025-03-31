import { FaPlus } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import { FaRegBookmark } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { Link } from "react-router";
const Card = () => {
    return (
        <div className="border-2 border-gray-500 hover:bg-gray-800/30 rounded-xl py-3 px-8 flex flex-col h-fit max-h-[45vh]" >
            <div className="h-[8vh] flex items-center justify-between" >
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, delectus quam vero odio molestias iure porro pariatur a, eveniet soluta cum nihil minus necessitatibus dignissimos debitis molestiae ab excepturi temporibus ut sequi eaque! Doloribus a asperiores dolorum placeat? Quo, ipsa! Accusamus itaque esse ad exercitationem, et consequatur tenetur, placeat amet dicta commodi officia rem illo modi dolorem? Totam neque excepturi pariatur libero recusandae quam quos, tenetur odio aliquam labore. Minima iste quo eum obcaecati aut labore perspiciatis quis officiis quae?
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
                    <Link to="/dashboard/discussion/90" className="flex items-center gap-2 cursor-pointer hover:bg-blue-600/50 px-2 rounded-xl" >Discussion <FaAngleRight /> </Link>
                </div>

            </div>
        </div>
    )
}

export default Card
