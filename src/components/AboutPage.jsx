import { motion } from "framer-motion";

const AboutPage = () => {

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      review: "This platform helped me find the best services. Highly recommended!",
      rating: "4/5",
    },
    {
      id: 2,
      name: "Jane Smith",
      review: "User-friendly and efficient. I always check reviews before hiring!",
      rating: "3/5",
    },
    {
      id: 3,
      name: "Michael Brown",
      review: "Great system for genuine service feedback!",
      rating: "3/5",
    },
    {
      id: 4,
      name: "Jhoni Since",
      review: "Great system for genuine service feedback!",
      rating: "5/5",
    },
  ];

  return (
    <div className=" sm:py-12 py-8" 
    style={{ backgroundColor: 'var(--slider-bg)' }}
    >
      <div className="sm:w-10/12 mx-auto">
        {/* Section 1: Why Choose Us */}
        <section className="">
          <h2 className='lg:text-4xl md:text-3xl text-xl font-bold bg-gradient-to-r from-red-700 via-orange-700 to-[#856715] text-transparent bg-clip-text text-center mb-6'>Why Choose Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className=" p-6 rounded-md text-center card-hover-effect"
            >
              <h3 className="text-xl font-semibold ">Trusted Reviews</h3>
              <p className="text-gray-600 mt-2">
                Verified and authentic user reviews to help you make the right choice.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className=" p-6 rounded-md text-center card-hover-effect"
            >
              <h3 className="text-xl font-semibold">Secure Platform</h3>
              <p className="text-gray-600 mt-2">
                Your data is safe with end-to-end encryption and secure authentication.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-md text-center card-hover-effect"
            >
              <h3 className="text-xl font-semibold">User-Friendly</h3>
              <p className="text-gray-600 mt-2">
                A clean and modern UI designed for effortless navigation and usage.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="sm:my-12 my-8 sm:border-b-3 border-dotted border-orange-500"></div>

        {/* Section 2: */}
        <section className=" sm:mt-12 mt-8">
          <h2 className='lg:text-4xl md:text-3xl text-xl font-bold bg-gradient-to-r from-red-700 via-orange-700 to-[#856715] text-transparent bg-clip-text text-center mb-6'>What Our Users Say</h2>
          <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4  rounded-md" 
          
          
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="p-3 sm:p-4 rounded-md w-full "
                style={{ backgroundColor: 'var(--featured-bg)' }}
              >
                <p className="text-gray-500">"{testimonial.review}"</p>
                <h4 className="font-bold mt-4 text-gray-500">{testimonial.name}</h4>
                <p className="text-yellow-500">Rating: {testimonial.rating}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
