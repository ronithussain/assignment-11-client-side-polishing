import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import Modal from 'react-modal';
Modal.setAppElement('#root');
import toast from 'react-hot-toast';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import UseAxiosSecure from '../hooks/UseAxiosSecure';
import { motion } from "framer-motion";
import SectionBanner from '../components/SectionBanner';
import { Link } from 'react-router-dom';



const MyService = () => {
  const { user } = UseAuth();
  const [myServices, setMyServices] = useState([]);
  // search
  const [search, setSearch] = useState('');


  // delete modal work
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // update modal work
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [updatedService, setUpdatedService] = useState({ title: '', price: '', category: '', description: '' });


  // Use axios customs hook
  const axiosSecure = UseAxiosSecure()
  useEffect(() => {
    // axios.get(`https://assignment-11-server-side-ashen.vercel.app/my-service/${user?.email}?search=${search}`, {withCredentials: true})
    //     .then(response => {
    //         setMyServices(response.data);

    //     })
    axiosSecure.get(`/my-service/${user?.email}?search=${search}`)
      .then(res => setMyServices(res.data))
      .catch(error => {
        console.error('Error fetching services:', error);

      });
  }, [user?.email, search]);
  // console.log(myServices)

  // delete functionality
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://assignment-11-server-side-ashen.vercel.app/my-service-delete/${selectedServiceId}`)

      setMyServices(myServices.filter(service => service._id !== selectedServiceId));
      toast.success('Data Deleted Successfully!')
      setShowDeleteModal(false);
    }
    catch (err) {
      // console.log(err.message);
      toast.error(err.message)
    }

  }

  // update functionality
  const handleUpdate = async () => {
    try {
      await axios.put(`https://assignment-11-server-side-ashen.vercel.app/my-service-update/${selectedServiceId}`, updatedService);
      setMyServices(myServices.map(service =>
        service._id === selectedServiceId ? { ...service, ...updatedService } : service
      ));
      toast.success('Service Updated Successfully!');
      setShowUpdateModal(false);
    } catch (err) {
      // console.log(err.message);
      toast.error(err.message);
    }
  };

  // handle update modal open and populate fields
  const handleUpdateModalOpen = (service) => {
    setSelectedServiceId(service._id);
    setUpdatedService({
      title: service.title,
      price: service.price,
      category: service.category,
      description: service.description
    });
    setShowUpdateModal(true);
  };



  return (
    <>
      <SectionBanner HeadingTitle='My Services' HeadingHome={<Link to='/'> Home</Link>} SubHeadingHome='My Service'></SectionBanner>

      <div className="bg-gradient-to-r from-purple-200 via-blue-200 to-teal-200 min-h-screen flex flex-col items-center sm:p-10 p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-5xl"
        >
          <input
            type="text"
            placeholder="Search your services..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-xl shadow-lg text-gray-800 bg-white border border-gray-300 focus:outline-none focus:ring-4 focus:ring-indigo-400 transition-all duration-300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-5xl bg-white shadow-2xl rounded-xl mt-8 overflow-x-auto"
        >
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
              <tr>
                <th className="p-4 text-md font-semibold">User</th>
                <th className="p-4 text-md font-semibold">Service</th>
                <th className="p-4 text-md font-semibold">Price</th>
                <th className="p-4 text-md font-semibold">Category</th>
                <th className="p-4 text-md font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myServices.map((service) => (
                <tr
                  key={service._id}
                  className="border-b hover:bg-gray-50 transition-all duration-300"
                >
                  <td className="p-4">
                    <img
                      src={user?.photoURL}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-indigo-500"
                    />
                  </td>
                  <td className="p-4">{service.title}</td>
                  <td className="p-4">${service.price}</td>
                  <td className="p-4">{service.category}</td>
                  <td className="p-4 flex space-x-3">
                    <button
                      onClick={() => {
                        setSelectedServiceId(service._id);
                        setUpdatedService(service);
                        setShowUpdateModal(true);
                      }}
                      className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                      <FiEdit className="text-lg" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedServiceId(service._id);
                        setShowDeleteModal(true);
                      }}
                      className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                    >
                      <RiDeleteBinLine className="text-lg" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Delete Modal */}
        <Modal
          isOpen={showDeleteModal}
          onRequestClose={() => setShowDeleteModal(false)}
          contentLabel="Delete Service"
          className="fixed inset-0 flex justify-center items-center z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-sm">
            <h2 className="text-xl font-bold text-center text-red-600 mb-4">
              Are you sure you want to delete this service?
            </h2>
            <div className="flex justify-between gap-4">
              <button
                onClick={handleDelete}
                className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Yes, Delete
              </button>
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-full py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>

        {/* Update Modal */}
        <Modal
          isOpen={showUpdateModal}
          onRequestClose={() => setShowUpdateModal(false)}
          contentLabel="Update Service"
          className="fixed inset-0 flex justify-center items-center z-50"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <div className="bg-white p-6 rounded-xl shadow-2xl w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-700">
              Update Service
            </h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Service Name
                </label>
                <input
                  id="title"
                  type="text"
                  value={updatedService.title}
                  onChange={(e) =>
                    setUpdatedService({ ...updatedService, title: e.target.value })
                  }
                  placeholder="Enter service name"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  id="price"
                  type="text"
                  value={updatedService.price}
                  onChange={(e) =>
                    setUpdatedService({ ...updatedService, price: e.target.value })
                  }
                  placeholder="Enter price"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <input
                  id="category"
                  type="text"
                  value={updatedService.category}
                  onChange={(e) =>
                    setUpdatedService({ ...updatedService, category: e.target.value })
                  }
                  placeholder="Enter category"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  value={updatedService.description}
                  onChange={(e) =>
                    setUpdatedService({ ...updatedService, description: e.target.value })
                  }
                  placeholder="Enter description"
                  className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="flex justify-center gap-4 pt-4">
                <button
                  onClick={handleUpdate}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Update
                </button>
                <button
                  onClick={() => setShowUpdateModal(false)}
                  className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>

  );
};

export default MyService;