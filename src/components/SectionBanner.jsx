import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BannerBg from '../assets/banner.jpg'

const SectionBanner = ({ HeadingTitle, HeadingHome, SubHeadingHome }) => {
    return (
        <div
            style={{
                backgroundImage: `var(--banner-gradient), url(${BannerBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="w-full md:h-70 h-50 flex items-center justify-center  px-4 sm:px-8 lg:px-12"
        >
            <div>
                <h2 className="lg:text-5xl md:text-4xl text-3xl bg-gradient-to-r from-red-700 via-orange-700 to-[#856715] text-transparent bg-clip-text">{HeadingTitle}</h2>
                <div className='flex items-center justify-center gap-x-1 mt-3 '>
                    <div className="flex items-center gap-1">
                        <button className="bg-black/5 hover:bg-black/10 px-2 py-1 text-xs font-semibold text-gray-800 rounded">
                            {HeadingHome}
                        </button>
                        <MdKeyboardDoubleArrowRight className="text-xl text-orange-500" />
                        <button className="bg-orange-100 hover:bg-orange-200 px-2 py-1 text-xs font-semibold text-orange-500 rounded">
                            {SubHeadingHome}
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SectionBanner;