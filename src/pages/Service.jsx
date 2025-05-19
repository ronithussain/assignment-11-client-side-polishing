import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import axios from 'axios';
import CountUp from 'react-countup';
import LoadingSpinner from '../components/LoadingSpinner';
import SectionBanner from '../components/SectionBanner';
import { Link } from 'react-router-dom';

const Service = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [countUp, setCountUp] = useState({ users: 0, reviews: 0, services: 0 }); // react countup useState;
    // __________________________________________
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

    // pagination logic.....
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Step 1: Pagination logic
    const totalPages = Math.ceil(services.length / itemsPerPage);
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const currentMovies = services.slice(firstIndex, lastIndex);

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };



    useEffect(() => {
        // service all data fetch in this api
        axios.get(`https://assignment-11-server-side-ashen.vercel.app/services?filter=${filter}&search=${search}`)
            .then(response => {
                setServices(response.data);
                setCountUp(prev => ({ ...prev, services: response.data.length }));// countUp setStates data
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching services:', error);
                setLoading(false);
            });

        // user reviews, service count fetching;
        axios.get('https://assignment-11-server-side-ashen.vercel.app/stats')
            .then(response => {
                setCountUp(response.data);
            })
            .catch(error => {
                console.error('Error fetching stats:', error);
            });

    }, [filter, search]);
    // console.log(filter);

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>;
    }

    return (
        <>
            <SectionBanner HeadingTitle='Our Services' HeadingHome={<Link to='/'> Home</Link>} SubHeadingHome='Services'></SectionBanner>
            <div className='min-h-screen'
            style={{ backgroundColor: 'var(--section-bg)' }}
            >
                <div className=' sm:w-10/12 mx-auto sm:px-0 px-2 sm:pt-12 pt-8'>
                 
                    <h2 className='lg:text-5xl text-2xl  md:text-3xl font-bold bg-gradient-to-r from-red-700 via-orange-700 to-[#856715] text-transparent bg-clip-text text-center mb-6'>Featured Services Section</h2>

                    {/* Search Input and filter input section*/}
                    <div className="w-full max-w-2xl mx-auto my-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        {/* Search Input */}
                        <div className="w-full sm:w-1/2">
                            <input
                                type="text"
                                name='search'
                                onChange={e => {
                                    setSearch(e.target.value);
                                    setCurrentPage(1); // reset to page 1
                                }}
                                placeholder="Search services..."
                                className="w-full px-4 py-3 rounded-lg shadow-md text-gray-900 bg-white border-none
                     focus:outline-none focus:ring-1 focus:ring-[#F54900] transition-all duration-300 ease-in-out"
                            />
                        </div>

                        {/* Filter Input */}
                        <div className="w-full sm:w-1/2">
                            <select
                                name='category'
                                id='category'
                                onChange={e => {
                                    setFilter(e.target.value);
                                    setCurrentPage(1); // reset to page 1
                                }}
                                className="w-full px-4 py-3 rounded-lg shadow-md bg-white border-none text-gray-900 
                     focus:outline-none focus:ring-1 focus:ring-[#F54900] transition-all duration-300 ease-in-out"
                            >
                                <option>All Categories</option>
                                <option>Web Development</option>
                                <option>Graphic Design</option>
                                <option>SEO</option>
                                <option>Marketing</option>
                                <option>App Development</option>
                                <option>Cyber Security</option>
                                <option>Cloud Computing</option>
                                <option>Video Editing</option>
                                <option>Business Consultancy</option>
                                <option>Photography</option>
                            </select>
                        </div>
                    </div>

                    {/* CountUp Section----------------------------- */}
                    <div className='flex justify-center gap-10 text-center mb-12'>
                        <div>
                            <h3 className='text-4xl font-bold text-[#f54a00c7]'><CountUp end={countUp.users} duration={3} /></h3>
                            <p className='text-lg text-gray-500'>Total Users</p>
                        </div>
                        <div>
                            <h3 className='text-4xl font-bold text-[#f54a00c7]'><CountUp end={countUp.reviews} duration={3} /></h3>
                            <p className='text-lg text-gray-500'>Total Reviews</p>
                        </div>
                        <div>
                            <h3 className='text-4xl font-bold text-[#f54a00c7]'><CountUp end={countUp.services} duration={3} /></h3>
                            <p className='text-lg text-gray-500'>Total Services</p>
                        </div>
                    </div>
                    {/* Service Cards-----------------------------*/}
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6  '>
                        {
                            currentMovies.length === 0 ? (
                                <p className="text-center col-span-full text-lg font-semibold text-gray-500">
                                    No movies found.
                                </p>
                            ) : (
                                currentMovies.map(service => (
                                    <ServiceCard key={service._id} service={service} />
                                ))
                            )
                        }

                    </div>
                </div>

                {/* Pagination---------------------------------*/}
                {
                    totalPages > 1 && (
                        <div className="flex justify-center items-center gap-2 mt-6 flex-wrap sm:pb-12 pb-8">
                            {/* Previous Button */}
                            <button
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className={`px-4 py-1 rounded-md border font-semibold transition-all duration-300
      ${currentPage === 1
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-orange-100 text-gray-700 hover:bg-[#F54900] hover:text-white border-orange-300'}
    `}
                            >
                                Previous
                            </button>

                            {/* Page Number Buttons */}
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToPage(index + 1)}
                                    className={`px-4 py-2 rounded-full  font-semibold transition-all duration-300
        ${currentPage === index + 1
                                            ? 'bg-[#bb7546] text-white'
                                            : 'bg-orange-100 text-gray-700 hover:bg-[#F54900] hover:text-white border-gray-300'}
      `}
                                >
                                    {index + 1}
                                </button>
                            ))}

                            {/* Next Button */}
                            <button
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-1 rounded-md border font-semibold transition-all duration-300
      ${currentPage === totalPages
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-orange-100 text-gray-700 hover:bg-[#F54900] hover:text-white border-orange-300'}
    `}
                            >
                                Next
                            </button>
                        </div>

                    )
                }
            </div>
        </>
    );
};

export default Service;