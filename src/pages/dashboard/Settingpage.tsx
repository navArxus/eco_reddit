const Settingpage = () => {
    return (
        <div className="flex flex-col gap-3 px-8 py-10" >
            <div className="flex items-center justify-between rounded-xl px-8 py-6 bg-gray-700" >
                <div className="flex items-center justify-start gap-4" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRArM_LlJg-p2HNeDX3sobLEXdJe2M1gBww&s" className="w-20 h-20 rounded-full border-2 border-black shadow-md shadow-gray-900" alt="" />
                    <div>
                        <h1 className="text-xl" >proProducer</h1>
                        <p>Consumer</p>
                    </div>
                </div>
                <div className="flex gap-4" >
                    <input type="file" className="hidden" name="profileChange" id="profileChange" accept="image/png , image/jpg , image/jpeg" />
                    <label htmlFor="profileChange" className="bg-gray-800 cursor-pointer px-4 py-2 rounded-lg" >
                        Change photo
                    </label>
                    <button className="border-2 border-red-400 px-4 py-2 cursor-pointer rounded-lg text-red-400" >
                        Delete photo
                    </button>
                </div>
            </div>
            <div className=" rounded-xl px-8 py-6 bg-gray-700" >
                <h1 className="pb-6" >Profile Details</h1>
                <div className="flex gap-4" >
                    <div className="w-full" >

                        <label className="w-full " htmlFor="name">Name </label>
                        <input placeholder="name@example.xyz" type="text" id="name"
                            value={"Nav verma"} className="mb-2 mt-2 px-3 w-full border-2 border-gray-500 rounded-md h-[6vh]" />
                    </div>
                    <div className="w-full" >

                        <label className="w-full" htmlFor="userType">User  type</label>
                        <select id="userType" className="mb-2 mt-2 px-3 w-full border-2 border-gray-500 rounded-md h-[6vh]">
                            <option value="producer" className="bg-gray-500" >Producer</option>
                            <option value="consumer" className="bg-gray-500" selected >Consumer</option>
                            <option value="decomposer" className="bg-gray-500" >Decomposer</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-4 mt-4" >
                    <div className="w-full" >

                        <label className="w-full " htmlFor="email">Email </label>
                        <input placeholder="name@example.xyz" type="email" id="email"
                            value={"navv5803@gmail.com"} className="mb-2 mt-2 px-3 w-full border-2 border-gray-500 bg-gray-500 rounded-md h-[6vh] cursor-not-allowed " disabled />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between rounded-xl px-8 py-6 bg-gray-700" >
                <div className="flex items-center justify-start gap-4" >
                    Logout this session 
                </div>
                <div className="flex gap-4" >
                    <button className="border-2 border-red-400 px-4 py-2 rounded-lg text-red-400" >
                        Logout
                    </button>
                </div>
            </div>
            <div className="flex items-center justify-between rounded-xl px-8 py-6 bg-gray-700" >
                <div className="flex items-center justify-start gap-4" >
                    Deactivate this Account
                </div>
                <div className="flex gap-4" >
                    <button className="border-2 border-red-400 px-4 py-2 rounded-lg text-red-400" >
                        Deactivate
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Settingpage
