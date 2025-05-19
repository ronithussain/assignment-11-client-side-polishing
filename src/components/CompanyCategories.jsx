import { LuArrowUp, LuCircleChevronRight } from 'react-icons/lu';
import bannerImage from '../assets/companyImg.jpg'
import smallCard from '../assets/smallCard.png'
import { MdArrowOutward, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';




const CompanyCategories = () => {
    return (
        <div>
            {/* card section */}
            <div className="sm:w-10/12 mx-auto sm:px-0 px-3">
                <div className='flex flex-col lg:flex-row sm:py-24 py-16 sm:gap-12 gap-y-12 md:space-y-8'>

                    {/* image-section */}
                    <div className='relative'>
                        <img
                            src={bannerImage}
                            className='lg:h-[650px] lg:w-[95%] lg:ml-[5%] rounded-3xl ' alt="" />

                        {/* small Card */}
                        <div className='sm:w-[30%] w-[30%] absolute sm:bottom-12 lg:-left-4 rounded-md   bottom-6 borders backdrop-blur opacity-90'>
                            <div className=' p-4 '>
                                <h3 className='text-orange-600 font-bold sm:text-2xl text-xl'>$12,500</h3>
                                <p className='text-gray-300 sm:text-base text-xs flex items-center'><LuArrowUp className='text-xl text-orange-400' /> 20% us last month</p>
                            </div>
                        </div>
                        {/* layout-1 */}
                        <div className='sm:w-[30%] w-[65%] sm:h-60 h-10 absolute -z-30 lg:-top-6 -top-6 sm:left-0 left-4   bg-orange-400 rounded-lg'>
                        </div>
                        {/* layout-2 */}
                        <div className='sm:w-[45%] w-[65%] h-24 absolute -z-30 lg:-right-4 lg:-bottom-4 right-4 -bottom-4  bg-orange-200 rounded-lg'>
                        </div>
                    </div>

                    {/* text-section */}
                    <div className='lg:w-[50%] lg:py-8 sm:border-r-4 border-dotted border-orange-500'>
                        <h4 className="text-orange-300 font-medium uppercase sm:text-base text-xs flex items-center">
                            <MdKeyboardDoubleArrowRight className="text-xl text-orange-300" />
                            About company</h4>
                        <h3 className="lg:text-4xl md:text-2xl text-xl mb-2 font-bold ">Best Solution For Different Type Services</h3>
                        <p className='sm:text-xl text-[20px]'>Our Professional Website Setup service offers a comprehensive, fixed-price package designed.</p>

                        <div className='my-6 space-y-1'>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' /> Free access to thousands of job opportunities</p>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' /> Grow your business and client base</p>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' /> Earn extra income on a flexible schedule</p>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' />No subscription or credit fees</p>
                        </div>
                        <div>
                            <Link to='/my-reviews'>
                                <button className="btn animated-button bg-orange-600 text-white border-none sm:text-base text-xs">
                                    More Details <MdArrowOutward className="sm:text-lg text-base" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CompanyCategories;