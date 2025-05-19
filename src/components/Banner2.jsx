import BannerBg from '../assets/banner.jpg'
import { LuCircleChevronRight } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import bannerImg from '../assets/bannerImage.jpg'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { LuArrowUp } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from 'react-router-dom';


const Banner2 = () => {
    return (
        <div className=" bg-cover bg-center bg-no-repeat w-full "
            style={{
                backgroundImage: `linear-gradient(rgba(249, 238, 236, 0.9), rgba(249, 238, 236, 0.9)), url(${BannerBg})`,
            }}>
            {/* card section */}
            <div className="sm:w-10/12 mx-auto sm:px-0 px-3">
                <div className='flex flex-col lg:flex-row py-20 gap-12 md:space-y-8'>
                    {/* text-section */}
                    <div className='lg:w-[50%] lg:py-8'>
                        <h4 className="text-orange-300 font-medium uppercase sm:text-base text-xs flex items-center">
                            <MdKeyboardDoubleArrowRight className="text-xl text-orange-300" />
                            prices for services</h4>
                        <h3 className="lg:text-4xl md:text-3xl text-xl font-bold mb-2 ">Understand Your Expenses, Reap the Rewards</h3>
                        <p className='sm:text-xl text-[20px]'>Our Professional Website Setup service offers a comprehensive, fixed-price package designed.</p>


                        <div className='my-6 space-y-1'>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' /> Free access to thousands of job opportunities</p>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' /> Grow your business and client base</p>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' /> Earn extra income on a flexible schedule</p>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' />No subscription or credit fees</p>
                        </div>
                        <div>
                            <Link to='/my-service'>
                                <button className="btn animated-button bg-orange-600 text-white border-none font-medium transition">
                                    Our Users <MdArrowOutward className="sm:text-lg text-base" />
                                </button>
                            </Link>
                        </div>
                    </div>
                    {/* image-section */}
                    <div className='relative'>
                        {/* lottie sticker */}
                        <div className='sm:w-[310px] w-[200px] absolute md:-top-18 md:-left-18 lg:-top-20 lg:-left-12 -top-12 -left-12'>

                        </div>
                        <img src={bannerImg} className='lg:h-[650px] lg:w-[95%] lg:ml-[5%] rounded-3xl' alt="" />
                        <div className='sm:w-[30%] w-[65%] absolute lg:-bottom-1  lg:-left-20 md:-bottom-6  md:-left-4 -bottom-18 -left-3'>
                        </div>
                        <div className='bg-white absolute sm:top-10 sm:-right-10 top-8 -right-2 sm:px-4 sm:py-2 p-1 rounded-xl shadow-2xl'>
                            <h5 className='flex items-center text-gray-800 text-xs sm:text-base'><IoIosNotificationsOutline className='sm:text-2xl text-xl text-orange-400' /> Update job alert</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;