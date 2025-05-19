import  { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import toast from 'react-hot-toast';
import axios from 'axios';
import DeleteModal from './Modals/DeleteModal';
import UpdateModal from './Modals/updateModal';
import DatePicker from 'react-datepicker';
import SectionBanner from '../components/SectionBanner';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = UseAuth();

    // modal work start here:
    const [isDeleteOpen, setIsDeleteOpen] = useState(false);
    const [isUpdateOpen, setIsUpdateOpen] = useState(false);
    const [selectedReview, setSelectedReview] = useState(null);
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        // Fetch reviews based on the logged-in user's email
        fetch(`https://assignment-11-server-side-ashen.vercel.app/my-reviews/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setReviews(data, startDate);
                // setStartDate(new Date(reviews.deadline))
                // console.log(data);
            });
    }, [user?.email]);

    // click the delete button show the modal.
    const openDeleteModal = (review) => {
        setSelectedReview(review);
        setIsDeleteOpen(true);
    };
    // click the update button show the modal.
    const openUpdateModal = (review) => {
        setSelectedReview(review);
        setIsUpdateOpen(true);
    };

    // delete functionality
    const handleDelete = async (id) => {
        if (!id) {
            setIsDeleteOpen(false);
            return;
        }
        try {
            const { data } = await axios.delete(`https://assignment-11-server-side-ashen.vercel.app/delete-review/${id}`);
            // console.log(data)
            toast.success('Reviews Delete is Successfully')

            // Update UI
            setReviews(reviews.filter(review => review._id !== id));
        }
        catch (error) {
            // console.log('Failed', error.message)
            toast.error('Review Delete is Failed')
        }
        setIsDeleteOpen(false);
    }
    // Update functionality
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const serviceTitle = form.serviceTitle.value;
        const review = form.review.value;
        const rating = form.rating.value;


        const reviewData = {
            serviceTitle,
            review,
            rating,
        }

        try {
            const { data } = await axios.put(`https://assignment-11-server-side-ashen.vercel.app/update-review/${selectedReview._id}`, reviewData)
            if (data.modifiedCount > 0) {
                toast.success('Review Updated Successfully');

                setReviews(prevReviews => prevReviews.map(review =>
                    review._id === selectedReview._id ? { ...review, ...reviewData } : review
                ));
            } else {
                toast.error('No changes detected');
            }
        }
        catch (error) {
            toast.error('Review Update Failed');
        }
        setIsUpdateOpen(false);
    }

    return (
        <>
            <SectionBanner HeadingTitle='My Reviews' HeadingHome={<Link to='/'> Home</Link>} SubHeadingHome='My Reviews'></SectionBanner>

            <div className='bg-orange-100'
            style={{ backgroundColor: 'var(--featured-bg)' }}
            >
                <div className="  sm:py-12 py-8 sm:px-0 px-3 ">
                    <div className="sm:w-10/12  space-y-6 mx-auto">
                        <h2 className='lg:text-5xl text-2xl  md:text-3xl font-bold bg-gradient-to-r from-red-700 via-orange-700 to-[#856715] text-transparent bg-clip-text text-center mb-6'>Your Reviews"</h2>

                        {/* Display reviews dynamically */}
                        {reviews.length > 0 ? (
                            reviews.map((review) => (
                                <div key={review._id} className="rounded-md p-6 mb-6 transition-transform transform hover:scale-105 hover:shadow-md duration-300 bordersB">
                                    <div className="avatar avatar-online" >
                                        <div className="w-12 mb-2">
                                            <img
                                                className=" sm:w-[60px] w-[50px] mr-2 cursor-pointer transition duration-300 hover:scale-105"
                                                referrerPolicy="no-referrer"
                                                src={user?.photoURL}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-500">{review.serviceTitle}</h3>
                                    <p className="text-gray-400 mt-2 text-lg">{review.review}</p>
                                    <p className="text-gray-400 mt-2 text-lg">Rating: {review.rating}/5</p>

                                    {/* Date Picker */}
                                    <div className="mt-1 text-gray-400">Date: <DatePicker
                                        className="w-full border-none focus:ring-2 focus:ring-indigo-500"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                    />
                                    </div>

                                    {/* Buttons */}
                                    <div className="mt-3 flex space-x-2 sm:space-x-4">
                                        <button
                                            onClick={() => openUpdateModal(review)}
                                            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-2 px-6 rounded-md transform hover:scale-105 hover:from-blue-600 hover:to-indigo-600 transition duration-300 ease-in-out"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => openDeleteModal(review)}
                                            className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-6 rounded-md transform hover:scale-105 hover:from-red-600 hover:to-orange-600 transition duration-300 ease-in-out"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-600 text-lg">You have no reviews yet.</p>
                        )}
                    </div>
                </div>

                {/* 🛠 Delete Confirmation Modal */}
                <DeleteModal
                    isOpen={isDeleteOpen}
                    onClose={() => setIsDeleteOpen(false)}
                    onConfirm={() => handleDelete(selectedReview?._id)}
                    reviewTitle={selectedReview?.serviceTitle}
                />

                {/* Update Review Modal */}
                <UpdateModal
                    isOpen={isUpdateOpen}
                    onClose={() => setIsUpdateOpen(false)}
                    onUpdate={handleUpdate}
                    review={selectedReview}
                />
            </div>
        </>



    );
};

export default MyReviews;
