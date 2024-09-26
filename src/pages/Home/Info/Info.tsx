import { motion } from "framer-motion";
import bg from "../../../assets/image/handsome-customer-checking-the-car-interior-e1631573837115.jpg";
import { FaCar, FaMapMarkedAlt, FaPencilRuler, FaRoad } from "react-icons/fa";
import Work from "../Work/Work";

const Info = () => {
  return (
    <div className="bg-slate-50">
      <div className="pt-20 mb-10 w-11/12 mx-auto p-3 rounded-2xl">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <h3 className="text-[#234896]">Car rent in Bangladesh</h3>
          <h1 className="text-[#050a15] text-5xl font-extrabold">
            Simple <span className="text-[#234896]">Steps</span> to Car Rental
            Rent
          </h1>
          <p>Make it happen in 4 easy steps! Best Of Luck</p>
        </motion.div>
        <div className="md:grid md:grid-cols-2 gap-8 md:min-h-[90vh] my-10">
          <div>
            <motion.div
              className="hero h-full md:min-h-[80vh] rounded-2xl bg-cover bg-center"
              style={{ backgroundImage: `url(${bg})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <div className="hero-overlay bg-opacity-90"></div>
              <div className="hero-content">
                <div className="max-w-md space-y-10">
                  <p className="text-[#ffd046]">
                    Online hiace rent in bangladesh
                  </p>
                  <h1 className="mb-5 text-5xl text-white font-bold">
                    4 Simple <span className="text-[#ffd046]">Steps</span> To
                    Car Rental Rent
                  </h1>
                  <p className="mb-5 text-white">
                    Booking a Hiace rental with Car Rent BD is convenient and
                    straightforward. You can reserve your preferred Hiace online
                    or get in touch with our customer service team to assist you
                    with the booking process.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
          <div>
            <motion.div
              className="md:border-l-2 mt-5 md:h-[420px] border-dashed md:relative ml-10"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="space-y-10 md:-left-8 top-0 md:absolute">
                {[
                  {
                    icon: FaPencilRuler,
                    title: "Choose Your Hiace",
                    description:
                      "Select the Hiace that suits your needs, whether it's a compact, midsize, or full-size option.",
                    number: 1,
                  },
                  {
                    icon: FaCar,
                    title: "Pick Your Rental Package",
                    description:
                      "Decide on your rental duration, whether it's a kilometre, daily, weekly, or monthly rental, to match your project or adventure.",
                    number: 2,
                  },
                  {
                    icon: FaRoad,
                    title: "20% Advance Payment Requirement",
                    description:
                      "When renting with us, ensure a smooth process by making a 20% advance payment, a necessary step in reserving your desired vehicle.",
                    number: 3,
                  },
                  {
                    icon: FaMapMarkedAlt,
                    title: "Pick Up and Go",
                    description:
                      "Head to our rental office at your scheduled time, complete the necessary paperwork, and drive away with your rented Hiace ready for your task or adventure.",
                    number: 4,
                  },
                ].map(({ icon: Icon, title, description, number }) => (
                  <motion.div
                    key={number}
                    className="md:flex   gap-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex">
                      <Icon className="text-7xl  bg-[#234896] text-white p-5 rounded-full" />
                      <div className="badge badge-warning -ml-5">{number}.</div>
                    </div>
                    <div className="space-y-5">
                      <h1 className="text-xl font-bold">{title}</h1>
                      <p className="font-thin">{description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="my-5">
          <Work />
        </div>
      </div>
    </div>
  );
};

export default Info;
