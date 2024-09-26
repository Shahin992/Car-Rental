import { motion } from "framer-motion";
import "./LabelInfo.css";

const LabelInfo = () => {
  return (
    <motion.div
      className="md:min-h-screen bg-container my-20 text-white flex bg-fixed items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <motion.div
        className="bg-[#fab637] bg-opacity-70 py-20 md:w-1/2 mx-auto items-center justify-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div>
          <motion.div
            className="flex items-center justify-center md:px-32 space-x-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <div>
              <h1 className="text-3xl text-black font-bold">WELCOME TO THE</h1>
              <h1 className="text-3xl text-white font-bold">
                Car Rent A Car in Dhaka
              </h1>
              <p>
                Car rent a car is popular in Bangladesh for quality service. We
                are offering a wide range of vehicle e.g. cars, micro bus, pick
                up, ambulance, truck, covered van and commercial vehicles for
                rent. Whether you are a traveler, moving home or planning a
                trip, zoom rent a car has the right vehicle choice for you.
              </p>
              <div className="my-10 text-2xl">
                <motion.button
                  className="uppercase text-center rounded-xl border-white text-white border-b-4 py-2 px-5 button-hover"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "#f1c40f",
                    color: "#000",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  read more
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LabelInfo;
