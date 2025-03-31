import { Link } from "react-router";
import Card from "./Components/Card"
import { MdOutlinePeople } from "react-icons/md";
const Home = () => {
    return (
        <div className=" flex items-start justify-stretch h-full w-full py-6" >
            <div className="w-full h-screen overflow-y-auto px-8 flex flex-col gap-6 pb-10 ">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="w-[30vw] h-full px-4 " >
                <Link to={"/dashboard/create"} className="w-full flex items-center justify-center bg-blue-500/50 gap-2 text-lg py-3 mb-3 rounded-lg" >
                    <MdOutlinePeople size={25}  />  Create a discussion
                </Link>
                <div className="bg-gray-500/30 w-full h-fit rounded-md px-6 py-1" >
                    <h1 className="my-2" >Trending ✨</h1>
                    <p className="text-blue-500 mb-2 hover:underline text-sm cursor-pointer hover:font-extrabold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, minima!...</p>
                    <p className="text-blue-500 mb-2 hover:underline text-sm cursor-pointer hover:font-extrabold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, minima!...</p>
                    <p className="text-blue-500 mb-2 hover:underline text-sm cursor-pointer hover:font-extrabold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, minima!...</p>
                    <p className="text-blue-500 mb-2 hover:underline text-sm cursor-pointer hover:font-extrabold" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, minima!...</p>
                </div>
            </div>
        </div>
    )
}

export default Home
