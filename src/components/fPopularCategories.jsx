import { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const PopularCategories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => {
                console.log(setCategories(data))
                setCategories(data)
            })
    }, [])
    return (
        <div className="max-w-screen-xl mx-auto sm:px-0  px-3 mt-24">
            <div className=" my-8">

                {/* categories */}
                <h5 className=" mb-2 text-orange-300 font-medium uppercase sm:text-base text-xs">categories</h5>

                {/* popular categories */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
                    <h3 className="md:text-3xl lg:text-4xl text-xl font-bold">Popular Update</h3>
                    <div>
                        <Link to='/service'>
                            <button className="animated-button bg-orange-600 text-white btn font-medium transition">
                                Explore More <MdArrowOutward className="text-lg" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* dynamic categories card layout with map */}
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mt-12 mb-20">
                {categories.map(category => (
                    <div
                        key={category._id}
                        className="border-orange-200 border p-4 rounded-lg text-center transition py-10 card-hover-effect"
                    >
                        {/* hover effect er jonno relative and z-10 css use kora holo */}
                        <div className="relative z-10">
                            <img
                                className="mx-auto w-24 h-24 mb-3"
                                src={category.image}
                                alt={category.title}
                            />
                            <h2 className="text-lg font-semibold">{category.title}</h2>
                            <p className="text-gray-500">{category.providers} Providers </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PopularCategories;