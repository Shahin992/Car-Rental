import { motion } from "framer-motion";
import { IoChatbubbleEllipsesSharp, IoPricetagsOutline } from "react-icons/io5";
import Heading from "../../../Component/Heading/Heading";
import { PiSpeedometerBold } from "react-icons/pi";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { FaCarCrash, FaCarSide } from "react-icons/fa";
import "./ChooseUs.css";

const ChooseUs = () => {
  return (
    <div className="w-11/12 mx-auto my-10">
      <motion.div
        className="md:min-h-screen bg-Choose my-20 text-white flex bg-fixed items-center justify-center px-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid md:grid-cols-2 justify-between items-center gap-10">
          <motion.div
            className="bg-[#fab637] hover:bg-opacity-100 duration-500 bg-opacity-80 rounded-2xl md:h-80 py-10 mx-auto items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="text-center flex justify-center">
                <FaCarCrash className="text-7xl text-black text-center" />
              </div>
              <div className="flex items-center justify-center px-10 space-x-5">
                <div>
                  <h1 className="text-3xl text-black font-bold">
                    Want to hire an economy car?
                  </h1>
                  <p>
                    We are offering you a wide range of vehicles e.g. cars,
                    microbus, pickup, ambulance, truck, covered van, and
                    commercial vehicles for rent. Whether you are a traveler,
                    moving home, or planning a trip, Zoom Rent A Car has the
                    right vehicle choice for you.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="bg-[#ff4848] hover:bg-opacity-100 duration-500 bg-opacity-80 rounded-2xl md:h-80 py-10 mx-auto items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="text-center flex justify-center">
                <FaCarSide className="text-7xl text-black text-center" />
              </div>
              <div className="flex items-center justify-center px-10 space-x-5">
                <div>
                  <h1 className="text-3xl text-black font-bold">
                    Want to hire a luxurious car?
                  </h1>
                  <p>
                    If you want to hire a luxurious car, microbus, or any other
                    vehicle, please give us a call and schedule your appointment
                    today! We will arrange your desired vehicle at an affordable
                    price.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="mb-[100px] mt-[100px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Heading Heading="WHY CHOOSE US" />

        <div className="grid md:grid-cols-4 gap-5 my-10">
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <IoPricetagsOutline className="text-5xl bg-primary-color text-white p-2 rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold">We Offer Affordable Price</h1>
              <p>
                If you hire a car from Zoom Rent A Car, it will be affordable
                for you because there are no hidden charges. We are open to our
                clients.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <PiSpeedometerBold className="text-5xl bg-primary-color text-white p-2 rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold">
                Wide Range of Services & Brands
              </h1>
              <p>
                In our fleet, we have 100 premium cars, microbuses, pickups,
                ambulances, as well as trucks, covered vans, and commercial
                vehicles.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <IoChatbubbleEllipsesSharp className="text-5xl bg-primary-color text-white p-2 rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Dedicated Support</h1>
              <p>
                Our car rental drivers will provide you with reliable support.
                They are always committed to assisting you. You can use the
                driver as needed.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div>
              <MdOutlineSettingsApplications className="text-5xl bg-primary-color text-white p-2 rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Ensure Security</h1>
              <p>
                We always strive to ensure top security for passengers. Zoom Car
                Rental tracks the vehicle using devices across the country to
                ensure safety.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChooseUs;
