const SectionTitle = ({ Heading, SubHeading }) => {
    return (
        <div>
            <div className=" sm:py-12 py-8">

                {/* categories */}
                <h5 className=" mb-2 text-orange-300 font-medium uppercase sm:text-base text-xs"></h5>

                {/* popular categories */}
                <div className="flex flex-col justify-center items-center  ">
                    <h3 className=" bg-gradient-to-r from-red-700 via-orange-700 to-[#856715] text-transparent bg-clip-text  text-center lg:text-4xl md:text-3xl text-xl font-bold">{Heading}</h3>
                    <p className=" sm:text-base text-xs sm:w-8/12 mx-auto  text-gray-500 mt-2  text-center">
                        {SubHeading}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SectionTitle;