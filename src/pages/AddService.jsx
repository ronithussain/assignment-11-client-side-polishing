import { useState } from "react";
import UseAuth from "../hooks/UseAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import SectionBanner from "../components/SectionBanner";


const AddService = () => {
    const { user } = UseAuth();
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();




    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const title = form.title.value;
        const company = form.company.value;
        const website = form.website.value;
        const description = form.description.value;
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const email = user?.email;
        const deadline = startDate;


        const formData = {
            image,
            title,
            company,
            website,
            description,
            category,
            price,
            email,
            deadline,
            review_count: 0,
        };
        console.table({ formData });
        try {
            await axios.post("https://assignment-11-server-side-ashen.vercel.app/add-service", formData)
            // form.reset()
            toast.success('Data Added Successfully!')
            navigate('/my-service')
        } catch (err) {
            // console.log(err.message)
            toast.error(err.message)
        }
    };

    return (
        <>
        <SectionBanner HeadingTitle='Add Services' HeadingHome={<Link to='/'> Home</Link>} SubHeadingHome='Add Service'></SectionBanner>
        
        <div className=" flex justify-center items-center sm:min-h-screen h-full sm:p-6 sm:py-12 py-8" 
        style={{ backgroundColor: 'var(--section-bg)' }}
        >
            <div className=" text-black/50 sm:p-8 p-3 rounded-xl w-full max-w-4xl borders">
                <h2 className='lg:text-5xl text-2xl  md:text-3xl font-bold bg-gradient-to-r from-red-700 via-orange-700 to-[#856715] text-transparent bg-clip-text text-center mb-6'>Add New Service</h2>
                <form onSubmit={handleOnSubmit} className="sm:space-y-6 space-y-3 text-gray-500">
                    {/* Service Image */}
                    <div>
                        <label className="block mb-1 font-semibold ">Service Image URL</label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Enter image URL..."
                            className="w-full p-3 bordersC rounded-lg text-black/50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Service Title & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-semibold">Service Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter title..."
                                className="w-full p-3 bordersC rounded-lg text-black/50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Company Name</label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Enter company name..."
                                className="w-full p-3 bordersC rounded-lg text-black/50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Company Website */}
                    <div>
                        <label className="block mb-1 font-semibold">Company Website</label>
                        <input
                            type="url"
                            name="website"
                            placeholder="Enter website URL..."
                            className="w-full p-3 bordersC rounded-lg text-black/50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Service Description */}
                    <div>
                        <label className="block mb-1 font-semibold">Description</label>
                        <textarea
                            name="description"
                            placeholder="Write details..."
                            className="w-full p-3 bordersC h-28 rounded-lg text-black/50 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                            required
                        ></textarea>
                    </div>

                    {/* Category & Price */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-1 font-semibold">Category</label>
                            <input
                                type="text"
                                name="category"
                                placeholder="Enter category..."
                                className="w-full p-3 bordersC rounded-lg text-black/50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Price ($)</label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Enter price..."
                                className="w-full p-3 bordersC rounded-lg text-black/50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    {/* Email (Auto-filled) */}
                    <div>
                        <label className="block mb-1 font-semibold">Your Email</label>
                        <input
                            type="email"
                            name="userEmail"
                            value={user?.email || ""}
                            readOnly
                            className="w-full p-3 bordersC rounded-lg  focus:outline-none cursor-not-allowed"
                        />
                    </div>

                    {/* Date Picker */}
                    <div>
                        <label className="block mb-1 font-semibold">Added Date</label>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            dateFormat="P"
                            className="w-full p-3 bordersC rounded-lg text-black/50 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full font-medium p-3 text-black/60 bg-gradient-to-r from-orange-300 to-orange-500 rounded-xl shadow-lg transition-all duration-300 hover:shadow-orange-400/60 active:scale-95 text-center block"
                    >
                        Add Service
                    </button>
                </form>
            </div>
        </div>
        </>
    );
};

export default AddService;
