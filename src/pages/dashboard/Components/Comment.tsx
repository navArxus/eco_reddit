import { FcLike } from "react-icons/fc";
import { FaPlus } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
const Comment = () => {
    return (
        <div className="flex flex-col items-start justify-start gap-4 border-2 py-4 px-8 border-gray-500 rounded-xl" >
            <div className="w-full flex items-start justify-start gap-4" >
                <img src="https://www.shutterstock.com/shutterstock/photos/2286554497/display_1500/stock-photo-random-pictures-cute-and-funny-2286554497.jpg" className="h-10 w-10 rounded-full" alt="" />
                <div>
                    <div className="flex items-center justify-between" >
                        <div>
                            <h1 className="text-md" >username</h1>
                            <p className="text-xs pb-4" >Producer</p>
                        </div>
                        <div className="px-6 py-1 gap-2 cursor-pointer rounded-full flex items-center  bg-blue-500/50">
                            <FaPlus />follow
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At consectetur eaque repudiandae iure pariatur nam voluptate architecto aperiam praesentium blanditiis autem quisquam doloremque veniam, temporibus rem nemo dolore aliquid eveniet numquam tempore sed. Nobis animi iure quidem quasi iste aperiam </p>

                    <div className="h-[5vh] mt-2 flex items-center justify-between" >
                        {/* <div><FcLike /></div> */}
                        <div className="flex w-fit  items-center gap-1" >
                            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-600/50 px-2 rounded-xl" ><FaRegHeart />9</div>
                        </div>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Comment
