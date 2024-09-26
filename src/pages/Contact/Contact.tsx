import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className=" mx-auto px-4 ">
      {" "}
      <motion.div
        className="min-h-screen bg-container my-20 text-white flex bg-fixed items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="bg-[#fab637] bg-opacity-70 py-20 w-1/2 mx-auto items-center justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <div>
            <motion.div
              className="flex items-center justify-center  px-5 text-center space-x-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            >
              <div>
                <motion.h1
                  className="text-4xl font-bold mb-8 text-center text-white"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  Contact Us
                </motion.h1>
                <h2 className="text-4xl font-semibold mb-4 text-gray-800">
                  Have any queries? Feel free to reach us.
                </h2>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <motion.section
        className="mb-8 p-6 bg-white shadow-md rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="md:flex justify-evenly  items-center">
          <div className="mb-6 h-56 w-56 rounded-3xl  flex justify-center items-center bg-yellow-400 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                Email Address
              </h3>
              <p className="text-gray-700">
                <a className="text-blue-500 hover:underline">
                  info@carrentbd.com
                </a>
              </p>
            </div>
          </div>

          <div className="mb-6 h-56 w-56  flex justify-center items-center  bg-blue-400 text-center rounded-3xl">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                Address
              </h3>
              <p className="text-gray-700">
                Head Office: Uttara, Dhaka, Bangladesh
              </p>
            </div>
          </div>

          <div className="mb-6 h-56 w-56  flex justify-center items-center  rounded-3xl  bg-green-400 text-center">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                Phone Number
              </h3>
              <p className="text-gray-700">
                <a
                  href="tel:+8801935660304"
                  className="text-blue-500 hover:underline"
                >
                  +8801935660304
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.section>
      <div className="grid w-11/12 mx-auto md:grid-cols-2 gap-3 my-20 items-center">
        <div>
          {" "}
          <motion.section
            className="p-6 bg-white shadow-md rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
              Leave a Message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block text-gray-700">Subject</label>
                <input
                  type="text"
                  className="mt-1 block w-full border border-gray-300 rounded-lg p-2"
                />
              </div>

              <div>
                <label className="block text-gray-700">Details</label>
                <textarea className="mt-1 block w-full border border-gray-300 rounded-lg p-2"></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Send Message
              </button>
            </form>
          </motion.section>
        </div>
        <div>
          <img
            src="/src/assets/image/2025-audi-e-tron-gt-lineup-range.jpeg"
            alt=""
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
