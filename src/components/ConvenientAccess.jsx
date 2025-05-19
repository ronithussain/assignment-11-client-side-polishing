import { GrBusinessService } from "react-icons/gr";
import { LiaFirstOrder } from "react-icons/lia";
import { LuListOrdered } from "react-icons/lu";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ConvencientAccess = () => {
    return (
        <>
            <div className="sm:w-10/12 mx-auto sm:px-0 px-3 sm:py-12 py-8 ">
                <div className="bg-[#032642] text-white py-20 rounded-3xl" 
                style={{ backgroundColor: 'var(--convenientAccess-bg)' }}
                >

                    {/* section one */}
                    <div className="flex flex-col justify-center items-center sm:w-[60%] mx-auto">
                        <div className="flex items-center">
                            <MdKeyboardDoubleArrowRight className="text-xl text-orange-300" />
                            <h4 className=" text-orange-300 font-medium uppercase sm:text-base text-xs"> HOW IT WORKS</h4>
                        </div>
                        <h3 className="lg:text-4xl md:text-3xl text-xl font-bold mb-2  text-center">Convenient Service Access</h3>
                        <p className="text-center lg:w-[80%] sm:text-base text-xs">Launch your online presence with ease! Our Professional Website Setup service offers a comprehensive</p>
                    </div>

                    {/* section two */}
                    <div className="grid lg:grid-cols-3 gap-12 md:grid-cols-2 mt-6">
                        {/* cart-1 */}
                        <div className="w-full group flex flex-col justify-center items-center space-y-3 sm:px-1 px-3">
                            <p className="text-4xl relative top-5 text-gray-500 group-hover:text-white transition duration-300">01</p>
                            <div className="border-3 p-8 rounded-full border-orange-600 relative z-10">
                                <p className="text-6xl"><GrBusinessService /></p>
                            </div>
                            <h5 className="text-xl font-semibold text-center hover:text-orange-500  transition duration-300">Choose Your Service</h5>
                            <p className="text-center">Pick the service you are looking for- from the website or the app.</p>
                        </div>

                        {/* cart-2 */}
                        <div className="w-full flex flex-col justify-center items-center space-y-3 group sm:px-1 px-3">
                            <p className="text-4xl relative top-5 text-gray-500 group-hover:text-white  transition duration-300">02</p>
                            <div className="border-3 p-8 rounded-full border-orange-600 relative z-10">
                                <p className="text-6xl"><LiaFirstOrder /></p>
                            </div>
                            <h5 className="text-xl font-semibold hover:text-orange-500  transition duration-300">Pick Your Schedule</h5>
                            <p className="text-center">Pick the service you are looking for- from the website or the app.</p>
                        </div>
                        {/* cart-3 */}
                        <div className="w-full flex flex-col justify-center items-center space-y-3 group sm:px-1 px-3">
                            <p className="text-4xl relative top-5 text-gray-500 group-hover:text-white transition duration-300">03</p>
                            <div className="border-3 p-8 rounded-full border-orange-600 relative z-10">
                                <p className="text-6xl"><LuListOrdered /></p>
                            </div>
                            <h5 className="text-xl font-semibold hover:text-orange-500 transition duration-300">Place The Order</h5>
                            <p className="text-center">Pick the service you are looking for- from the website or the app.</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default ConvencientAccess;