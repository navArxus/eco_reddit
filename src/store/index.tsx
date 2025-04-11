import { create } from "zustand"
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
    username: string
    isLiked: boolean
}

interface StoreState {
    discussion: Discussion[];
    id: string[];
    hasMore: boolean;
    fetchDiscussions: () => void;
}

const useStore = create<StoreState>((set, get) => ({
    discussion: [],
    id: [],
    hasMore: true,
    fetchDiscussions: async () => {
        const { id, hasMore } = get();
        if (!hasMore) return;

        const res = await axios.post(
            `${import.meta.env.VITE_BACKEND_URL}/getDiscussion`,
            { limit: 10, exclude: id },
            { withCredentials: true }
        );

        const newDiscussions = res.data;
        const newHasMore = res.data.length > 0 ? true : false;
        console.log(res)

        set((state) => ({
            discussion: [...state.discussion, ...newDiscussions],
            id: [...state.id, ...newDiscussions.map((d: Discussion) => d._id)],
            hasMore: newHasMore,
        }));
    }

}))

export default useStore