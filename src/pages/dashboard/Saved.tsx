import Card from "./Components/Card"
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";

const Saved = () => {
  const navigate = useNavigate();
  const [savedpost, setsaveddpost] = useState([])
  useEffect(() => {

    const fetchSaved = async () => {
      const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/getDiscussion/get-saved-discussions`, {
        withCredentials: true,
      })
      setsaveddpost(result.data.savedDiscussions)
    }
    fetchSaved();
  }, []);

  return (
    <div className="" >
      <div className="flex items-center justify-between px-4 py-4 h-[10vh]" >
        <button
          onClick={() => navigate(-1)}
          className=" px-3 cursor-pointer py-2 flex items-center gap-1 bg-gray-700 text-white rounded-lg"
        >
          <MdOutlineArrowBack /> Back
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 py-2  w-full h-[90vh] overflow-y-auto px-2" >
        {savedpost.map(e => {
          return (
            <Card data={e} />
          )
        })}
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
    </div>
  )
}

export default Saved
