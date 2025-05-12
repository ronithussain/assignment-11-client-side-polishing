import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BannerBg from '../assets/banner.jpg'

const SectionBanner = ({ HeadingTitle, HeadingHome, SubHeadingHome }) => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(249, 238, 236, 0.9), rgba(249, 238, 236, 0.9)), url(${BannerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-full h-80 flex items-center justify-center  px-4 sm:px-8 lg:px-12"
        >
            <div>
                <h2 className="lg:text-5xl md:text-4xl text-3xl font-medium">{HeadingTitle}</h2>
                <div className='flex items-center justify-center gap-x-1 mt-3'>
                    <button className=' text-xs font-semibold text-gray-800'>
                        {HeadingHome}
                    </button>
                    <MdKeyboardDoubleArrowRight className="text-xl text-orange-500" />
                    <button className=' text-xs font-semibold text-orange-500 '>
                        {SubHeadingHome}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SectionBanner;