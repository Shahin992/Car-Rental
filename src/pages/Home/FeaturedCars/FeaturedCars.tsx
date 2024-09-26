/* eslint-disable @typescript-eslint/no-explicit-any */
import Car from "../../Car Listing/car/Car";
import { useAppSelector } from "../../../redux/app/hook";
import { useCar } from "../../../redux/features/Car/CarSlice";

import { Link } from "react-router-dom";
const FeaturedCars = () => {
  const useGetAllCar = useAppSelector(useCar);
  const letestProduct = [...useGetAllCar]?.sort(
    (a, b) =>
      new Date(b.createdAt)?.getTime() - new Date(a.createdAt)?.getTime()
  );
  return (
    <div className="bg-slate-50 ">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-12 rounded-xl">
        <div className="text-center space-y-4 my-5">
          <h3 className="text-[#234896]"> Car rent in bangladesh</h3>
          <h1 className="text-[#050a15] text-5xl font-extrabold">
            Types of<span className="text-[#234896]"> Featured</span> Cars
          </h1>
          <p>
            At Car Rent BD, we offer a range of car rentals to cater to your
            specific needs:
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 gap-10  justify-center my-10 md:grid-cols-3 lg:grid-cols-3 ">
            {letestProduct?.slice(0, 6).map((car: any) => (
              <Car key={car._id} carItem={car} />
            ))}
          </div>
          <div className="bg-primary-color py-1  flex my-5 justify-center  md:w-[20%] mx-auto text-white rounded-lg">
            <Link to={`/car-listing`}>
              <button>More Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
