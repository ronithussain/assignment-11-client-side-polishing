import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";


const HomeCard = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-11-server-side-ashen.vercel.app/services?limit=4')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            })
    }, [])
    return (
        <>
            <div className="sm:w-10/12 mx-auto sm:px-0  px-3 ">
                <SectionTitle Heading='Featured Services Section' SubHeading="Our Featured Services showcase a curated selection of the most popular and highly rated services that we offer. Whether you're looking for expert advice, professional solutions, or cutting-edge technology,">

                </SectionTitle>

                <div className="grid  lg:grid-cols-4  md:grid-cols-3 grid-cols-1 sm:gap-8 gap-6 sm:mb-12 s">
                    {services.map((service) => (
                        <div
                            key={service._id}
                            className="relative group lg:p-6 md:p-4 p-3 border border-orange-100 rounded-md shadow-md hover:shadow-orange-600/40"
                        >
                            {/* image section*/}
                            <div className="relative overflow-hidden rounded-lg">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
                                <span className="absolute top-3 left-3 bg-gradient-to-r from-orange-400 to-orange-700 text-white text-xs px-3 py-1 rounded-full uppercase shadow-md">
                                    {service.category}
                                </span>
                            </div>
                            
                            {/* Features */}
                            <div className="mt-4 space-y-2 text-left">
                                <p className="flex items-center text-xl text-gray-500">
                                    — <span className="ml-2 font-semibold">{service.title}</span>
                                </p>
                                <p className="flex items-center text-gray-500">
                                    — <span className="ml-2 font-semibold text-sm">{service.description.slice(0, 30)}</span>
                                </p>
                            </div>

                            {/* Button */}
                            <Link
                                to={`/service-details/${service._id}`}
                                className="animated-button mt-3 sm:w-full py-2 font-semibold text-white bg-gradient-to-r from-orange-800 to-orange-900 rounded-lg shadow-lg transition-all duration-300 hover:shadow-orange-400/60 active:scale-95 text-center block"
                            >
                                See Details
                            </Link>

                        </div>
                    ))}
                </div>


            </div>
        </>
    );
};

export default HomeCard;