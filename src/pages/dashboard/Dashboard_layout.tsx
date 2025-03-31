import { Outlet } from "react-router"
import { MdOutlineExplore } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { TbPlant2 } from "react-icons/tb";
import { NavLink } from "react-router";
import { useState } from "react";
import Activity_tab from "./Components/Activity_tab";
import { HiOutlineBookmark } from "react-icons/hi";

const Dashboard_layout = () => {

    const [isactivitytabOpen, setisactivitytabOpen] = useState<boolean>(false)
    const activitytabhandler = () => {
        setisactivitytabOpen(false)
    }
    return (
        <div className="flex items-center h-full justify-between" >
            {/* sidebar */}
            <div className="w-[18vw]  h-full flex justify-between px-4 py-8 flex-col " >
                <div className="w-full flex gap-2 text-lg items-start flex-col " >
                    <h1 className="italic font-extrabold px-2 mb-3" >Eco-Reddit</h1>
                    <NavLink className={({ isActive }: { isActive: boolean }) => `flex items-center gap-2 w-full px-2 py-3 rounded-md hover:bg-gray-400/20 ${isActive ? "bg-gray-300/10" : "font-normal"}`} to="/dashboard/home" > <TbPlant2 size={30} />Home</NavLink>
                    <NavLink className={({ isActive }: { isActive: boolean }) => `flex items-center gap-2 w-full px-2 py-3 rounded-md hover:bg-gray-400/20 ${isActive ? "bg-gray-300/10" : "font-normal"}`} to="/dashboard/discover" ><MdOutlineExplore size={30} /> Discover</NavLink>
                    <button onClick={e => setisactivitytabOpen(!isactivitytabOpen)} className="cursor-pointer flex items-center gap-2 w-full px-2 py-3 rounded-md hover:bg-gray-400/20" ><FaRegBell size={30} />Activity</button>
                    <NavLink className={({ isActive }: { isActive: boolean }) => `flex items-center gap-2 w-full px-2 py-3 rounded-md hover:bg-gray-400/20 ${isActive ? "bg-gray-300/10" : "font-normal"}`} to="/dashboard/saved" ><HiOutlineBookmark size={30} /> Saved</NavLink>
                </div>
                <div className="w-full flex text-lg items-start flex-col " >
                    <NavLink className={({ isActive }: { isActive: boolean }) => `flex items-center gap-2 w-full px-2 py-3 rounded-md hover:bg-gray-400/20 ${isActive ? "bg-gray-300/10" : "font-normal"}`} to="/dashboard/setting  " ><GoGear size={30} />Setting</NavLink>
                </div>
            </div>
            <div className="w-[82vw] h-full relative" >

                {isactivitytabOpen && <div className="absolute top-0 bottom-0 w-full h-full" > <Activity_tab closeHandler={activitytabhandler} /></div>}
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard_layout
