import { Link } from "react-router";
import Card from "./Components/Card"
import { MdOutlinePeople } from "react-icons/md";
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react";
import useStore from "../../store/index";
import axios from "axios";
interface Discussion {
    _id: string;
    userID: {
        _id: string;
        name: string
    }
    commentID: string[];
    discussion: string;
    like: string[];
    category: string;
    dateTime: string; // ISO date string
    __v: number;
    username: string;
    isLiked: boolean
}
const Dashboardhomepage = () => {
    const { discussion, hasMore, fetchDiscussions } = useStore()
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 1,
    });
    const [trendingDiscussion, setTrendingDiscussion] = useState<Discussion[]>([])
    const fetchtrendinghandler = async () => {
        const result = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/getDiscussion/trending`, {
            withCredentials: true,
        })
        setTrendingDiscussion(result.data.trending)
    }
    useEffect(() => {
        fetchDiscussions()
        fetchtrendinghandler()
    }, []);

    useEffect(() => {
        if (inView && hasMore) {
            fetchDiscussions()
        }

    }, [inView, hasMore, fetchDiscussions]);


    return (
        <div className=" flex items-start justify-stretch h-full w-full py-6" >
            <div className="w-full h-[95vh] overflow-y-auto px-8 flex flex-col gap-6 pb-10 ">
                {discussion.map(e => {
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
                <Card /> */}
                {hasMore &&
                    <div className="w-full  flex items-center justify-center " ref={ref} >
                        <div className="loader2 w-full flex items-center justify-center" ></div>
                    </div>
                }
            </div>
            <div className="w-[30vw] h-full px-4 " >
                <Link to={"/dashboard/create"} className="w-full flex items-center justify-center bg-blue-500/50 gap-2 text-lg py-3 mb-3 rounded-lg" >
                    <MdOutlinePeople size={25} />  Create a discussion
                </Link>
                <div className="bg-gray-500/30 w-full h-fit rounded-md px-4 py-1 pb-4" >
                    <h1 className="my-2" >Trending ✨</h1>
                    <div className="flex flex-col gap-2" >

                        {trendingDiscussion.map(e => {
                            return (
                                <Link to={`/dashboard/discussion/${e._id}`} className="text-blue-500 mb-2 hover:underline text-sm cursor-pointer hover:font-extrabold" >{e.discussion.split(" ").slice(0, 10).join(" ")}... <br /> </Link>
                            )
                        })}
                    </div>

                </div>

                {inView ? "view ma hai" : "view ma nhi hai "}
            </div>
        </div>
    )
}

export default Dashboardhomepage
