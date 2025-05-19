import { useEffect, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';


const BlogCategories = () => {
    const [blogCategories, setBlogCategories] = useState([]);

    useEffect(() => {
        fetch('blogCategories.json')
            .then(res => res.json())
            .then(data => setBlogCategories(data))
    }, [])

    return (
        <div style={{ backgroundColor: 'var(--featured-bg)' }}>
            <div className="sm:w-10/12 mx-auto sm:px-0 px-3 py-16">
                {/* Blogs text title */}
                <div>
                    <h4 className="text-orange-400 font-medium uppercase sm:text-base text-xs"> Blogs</h4>
                    <div className='flex flex-col sm:flex-row justify-between'>
                        <h1 className="lg:text-4xl md:text-3xl text-xl font-bold bg-gradient-to-r from-red-700 via-orange-700 to-[#856715] text-transparent bg-clip-text">Popular Update</h1>
                        <button className='flex items-center gap-x-1 text-orange-600 underline sm:mt-6 mt-3 group transition duration-300 ease-in-out hover:text-orange-700 sm:text-base text-xs  p-1 bg-[#DCF2F1]'>
                            Explore More
                            <MdArrowOutward className='sm:text-xl text-base transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                        </button>
                    </div>
                </div>

                {/* Blogs card with map */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:mt-8 mt-4">
                    {blogCategories.map(blog => (
                        <div
                            key={blog._id}
                            className="card  group ">
                            {/* title */}
                            <h2 className="text-gray-500 card-title sm:text-2xl text-base mb-4 relative">
                                {blog.title}
                                {/* Left to right underline */}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></span>
                            </h2>

                            {/* date */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="flex items-center gap-x-1 text-gray-700 text-xs">
                                    {blog.category}</span>
                                <span className="ml-auto flex items-center text-black bg-[#FDEEEE] px-3 py-2 rounded sm:text-base  text-xs">
                                    {blog.date}
                                </span>
                            </div>
                            {/* image */}
                            <figure className="card-container rounded-xl bg-base-100 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt="service"
                                    className="w-full px-6 py-4  object-cover transition-transform duration-500 ease-in-out group-hover:scale-115  rounded-4xl " />
                            </figure>
                            <p className='mt-4 text-gray-600 sm:text-base text-xs'>{blog.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BlogCategories;