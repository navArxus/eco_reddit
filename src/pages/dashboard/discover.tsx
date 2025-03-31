import Card from "./Components/Card"
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlinePeople } from "react-icons/md";

const Discover = () => {
  const navigate = useNavigate();

  return (
    <div className="" >
      <div className="flex items-center justify-between px-4 py-4 h-[10vh]" >
        <button
          onClick={() => navigate(-1)}
          className=" px-3 cursor-pointer py-2 flex items-center gap-1 bg-gray-700 text-white rounded-lg"
        >
          <MdOutlineArrowBack /> Back
        </button>
        <Link to={"/dashboard/create"} className="w-fit flex px-4 items-center justify-center bg-blue-500/50 gap-2 text-md py-3 rounded-lg" >
          <MdOutlinePeople size={20} />  Create a discussion
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 py-2  w-full h-[90vh] overflow-y-auto px-2" >
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
        <Card />
      </div>
    </div>
  )
}

export default Discover
