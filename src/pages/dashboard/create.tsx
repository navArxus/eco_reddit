import Textarea from '@mui/joy/Textarea';
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import { MdOutlineFileUpload } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { useFormik } from 'formik';
import * as Yup from "yup"
import { useMutation } from '@tanstack/react-query';
import { SubmitdiscussionData } from '../../api/auth/Login';
import { toast } from 'react-toastify';

const Create = () => {
    const createMutation = useMutation({
        mutationKey: ["register"],
        mutationFn: SubmitdiscussionData,
        onSuccess: (data) => {
            if (data.data.status == true) {
                toast.success(data.data.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
            else {
                toast.error(data.data.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            }
        },
        onError: (err) => {
            console.log(err)
        }
    })
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            discussion: '',
            category: 'producer',
            images: null,
        },
        validationSchema: Yup.object({
            discussion: Yup.string().required('Discussion is required').min(20, 'Minimum 20 characters required')
                .max(500, 'Maximum 200 characters allowed'),
            category: Yup.string().required('Please select a category'),
        }),
        onSubmit: (values) => {
            console.log('Submitted values:', values);
            createMutation.mutate(values);
            // You can send these values to your backend here
        },
    });
    return (
        <div className='px-4 py-10 overflow-y-auto w-full h-full' >
            <form onSubmit={formik.handleSubmit} >
                <div className='flex items-center justify-between' >

                    <button
                        onClick={() => navigate(-1)}
                        className=" px-3 cursor-pointer py-2 flex items-center gap-1 bg-gray-700 text-white rounded-lg"
                    >
                        <MdOutlineArrowBack /> Back
                    </button>
                    <button className='bg-blue-500 px-4 py-2 rounded-lg flex items-center justify-center gap-2' > <MdOutlineFileUpload size={20} />Post</button>
                </div>
                <div className="w-full h-fit mt-6 border-2 border-gray-500 rounded-xl px-2 py-2  " >
                    <div className='px-4 py-3 flex items-center justify-between' >
                        <h1 className='' >Create a discussion</h1>
                        {/* <button className='bg-blue-500 px-4 py-2 rounded-lg flex items-center justify-center gap-2' > <MdOutlineFileUpload size={20} />Post</button> */}
                    </div>
                    <Textarea
                        minRows={2}
                        size="md"
                        variant="plain"
                        placeholder="What's on you mind ?"
                        autoFocus
                        value={formik.values.discussion}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        name="discussion"
                        sx={{
                            backgroundColor: "transparent",
                            color: "white",
                            flex: 1,
                            '&:hover': { backgroundColor: "transparent", color: "white" },
                            '&:focus': { backgroundColor: "transparent", color: "white" },
                            '&::placeholder': { color: "rgba(255, 255, 255, 0.6)" },
                            border: "none", // Removes border
                            outline: "none",
                            '&::before': { display: "none" }, // Removes MUI's default underline
                            '&::after': { display: "none" },
                        }}
                    />
                    {formik.touched.discussion && formik.errors.discussion && (
                        <div className="text-red-600 text-sm px-4 pt-1">{formik.errors.discussion}</div>
                    )}
                    {/* <button className="px-4 bg-blue-500/50 mr-4 py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-400" >Comment <PiPaperPlaneTiltBold size={15} /></button> */}
                </div>
                <h1 className='my-3 text-gray-400 ' >Adding images will enable soon   ~NAV</h1>
                <div className="w-full h-fit  border-2 border-gray-500 rounded-xl px-2 py-2  " >
                    <div className='px-3 py-3 flex items-center justify-between' >
                        <h1 className='' >Add images</h1>
                        <label htmlFor="images" className='px-4 bg-blue-500/50  py-2 rounded-lg flex items-center justify-center gap-2 cursor-pointer hover:bg-blue-400' ><IoMdAdd />Add</label>
                    </div>
                    <input type="file" name="images" id='images' className=" hidden w-full h-fit p-2 border-2 " />
                </div>
                <div className="w-full h-fit mt-6 border-2 border-gray-500 rounded-xl px-2 py-2  " >
                    <div className='px-3 py-3 flex items-center justify-between' >
                        <h1 className='' >Category</h1>
                        <select
                            id="userType"
                            name="category"
                            value={formik.values.category}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className=" px-3 w-fit border-2 border-gray-500 rounded-md h-[6vh]">
                            <option value="producer" className="bg-gray-500" selected >Producer</option>
                            <option value="consumer" className="bg-gray-500" >Consumer</option>
                            <option value="decomposer" className="bg-gray-500" >Decomposer</option>
                        </select>
                    </div>
                    {formik.touched.category && formik.errors.category && (
                        <div className="text-red-500 text-sm px-4 pt-1">{formik.errors.category}</div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Create
