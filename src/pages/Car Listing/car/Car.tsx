import { Link } from "react-router-dom";
import { TCar } from "../../../Component/Types/Types";
import { motion } from "framer-motion";

type TCarItem = {
  carItem: TCar;
};

const Car = ({ carItem }: TCarItem) => {
  return (
    <motion.div
      className="my-3"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="card bg-base-100 md:h-96 md:w-96 shadow-xl">
        <figure>
          <img src={carItem?.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{carItem.name}</h2>

          <div className="">
            Price:
            <div className="badge">$ {carItem.pricePerHour}</div>
          </div>

          <p>{carItem.description}</p>
          <div className="card-actions justify-end">
            <div className="bg-primary-color w-full text-white text-center rounded-lg">
              <Link to={`/car-details/${carItem._id}`}>
                <button>More Details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Car;
