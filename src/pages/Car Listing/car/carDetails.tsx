/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useParams } from "react-router-dom";
import { useGetSingleCarQuery } from "../../../redux/features/Car/carApi";
import { TCar } from "../../../Component/Types/Types";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { bookedCar } from "../../../redux/features/book/bookSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/app/hook";
import { Button } from "antd";
import { useState } from "react";
import { useCar } from "../../../redux/features/Car/CarSlice";
import Car from "./Car";

const CarDetails = () => {
  const dispatch = useAppDispatch();
  const useGetAllCar = useAppSelector(useCar);

  const { carId } = useParams();
  const { data, isLoading } = useGetSingleCarQuery(carId);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  if (isLoading) {
    return (
      <>
        <h1>Loading.......</h1>
      </>
    );
  }

  const car: TCar = data?.data;
  const additionalFeatures = ["Insurance", "GPS", "Child Seat"];

  const AddFeatures = (feature: string) => {
    let updatedFeatures: string[];

    if (selectedFeatures.includes(feature)) {
      updatedFeatures = selectedFeatures.filter((f) => f !== feature);
    } else {
      updatedFeatures = [...selectedFeatures, feature];
    }

    setSelectedFeatures(updatedFeatures);
  };

  const  handleBooking = () => {
    const updatedCar: any = { ...car, AdditionalFeatures: selectedFeatures };
    dispatch(bookedCar(updatedCar));
  };

  return (
    <div className="w-11/12 mx-auto px-4 md:grid gap-20 grid-cols-6 sm:px-6 lg:px-8 py-12 space-y-5">
      <div className="col-span-4 ">
        <h1 className="text-4xl font-bold mb-4">{car.name}</h1>

        <figure>
          <InnerImageZoom
            src={car?.image}
            zoomSrc={car?.image}
            zoomType="hover"
            zoomScale={1.5}
          />
        </figure>
        <h1 className="text-4xl font-bold mb-4">{car.name}</h1>

        <p className="text-gray-600 mb-8">{car.description}</p>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <ul className="list-disc list-inside space-y-2">
            {car.features.map((feature, index) => (
              <li key={index} className="text-gray-700">
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="text-lg font-semibold text-gray-800">
              Price per Hour: {car.pricePerHour}
            </p>
            <p className="text-lg font-semibold text-gray-800">
              Availability: {car.status}
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Choose Additional Features
          </h2>
          <div className="flex flex-wrap gap-4">
            {additionalFeatures.map((feature) => (
              <label key={feature} className="inline-flex items-center">
                <input
                  type="checkbox"
                  value={feature}
                  onChange={() => AddFeatures(feature)}
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-gray-700">{feature}</span>
              </label>
            ))}
          </div>
        </div>
        <Link
            to="/booking"
            className=" py-3 rounded-md  transition duration-300"
          >
        <Button onClick={handleBooking} className="bg-primary-color w-full text-white text-center rounded-lg">
       
            Book Now
            
        </Button>
        </Link>
        
      </div>
      <div className="col-span-2">
        <div className="text-center space-y-10 my-5">
          <h1 className="text-[#050a15] text-5xl font-extrabold">
            Choose your<span className="text-[#234896]"> Favorite</span> Cars
          </h1>
          <p>
            At Car Rent BD, we offer a range of car rentals to cater to your
            specific needs:
          </p>
        </div>
        <div className="my-10 grid grid-cols-1">
          {useGetAllCar?.slice(0, 2).map((car: any) => (
            <Car key={car._id} carItem={car} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
