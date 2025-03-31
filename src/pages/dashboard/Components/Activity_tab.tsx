import Notification from './Notification'
import { IoClose } from "react-icons/io5";
type props = {
    closeHandler: () => void;
}
const Activity_tab: React.FC<props> = ({closeHandler}) => {
    return (
        <div className='w-full h-full bg-gray-900/70'  >
            <div className='overflow-y-auto gap-4 flex flex-col w-[40%] bg-gray-900 h-full px-4 py-6' >
                <div className='flex items-center justify-between' >
                    <h1 className=' sticky' >Recent Activity</h1>
                    <div onClick={closeHandler} className='p-1 hover:bg-gray-700 cursor-pointer rounded-xl' ><IoClose /></div>
                </div>
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
                <Notification />
            </div>
        </div>
    )
}

export default Activity_tab
