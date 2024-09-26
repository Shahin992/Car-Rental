/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import Car from "./car/Car";
import { useAppDispatch, useAppSelector } from "../../redux/app/hook";
import {
  filterCars,
  filteredCars,
  setFilters,
} from "../../redux/features/Car/CarSlice";
import { useGetAllCarQuery } from "../../redux/features/Car/carApi";
import { Button } from "antd";

const CarListing = () => {
  const { data, isLoading } = useGetAllCarQuery(undefined);
  const filterCarFromState = useAppSelector(filteredCars);

  const { register, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  if (isLoading) {
    return <>loading.....</>;
  }
  const cars = data?.data;

  console.log(filterCarFromState);

  const carTypes = ["SUV", "Sedan", "Hatchback", "Convertible"];
  const priceRanges = [100, 500, 1000, 2000, 5000];
  const colors = ["Red", "Blue", "Black", "White", "Gray"];
  const features = ["Sunroof", "Navigation", "Bluetooth", "Backup Camera"];

  const onSubmit = (filterCriteria: any) => {
    dispatch(setFilters(filterCriteria));
    dispatch(filterCars());
  };

  return (
    <div className="mt-20 w-11/12 mx-auto">
      <div className="text-center space-y-4 my-5">
        <h1 className="text-[#050a15] text-5xl font-extrabold">
          Types of<span className="text-[#234896]"> Car Rantal</span> Cars
        </h1>
        <p>
          At Car Rent BD, we offer a range of car rentals to cater to your
          specific needs:
        </p>
      </div>
      <div className="bg-white bg-opacity-75 p-2 w-full rounded-lg shadow-lg  mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-5 gap-4 items-center"
        >
          {/* Car Type Filter */}
          <div className="mb-4">
            <label
              htmlFor="carType"
              className="block text-gray-700 font-semibold mb-2"
            >
              Car Type
            </label>
            <select
              id="carType"
              {...register("carType")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Car Type</option>
              {carTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter with Scroll Bar */}
          <div className="mb-4">
            <label
              htmlFor="priceRange"
              className="block text-gray-700 font-semibold mb-2"
            >
              Price Range
            </label>
            <input
              type="range"
              id="priceRange"
              {...register("priceRange")}
              min={priceRanges[0]}
              max={priceRanges[priceRanges.length - 1]}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>{priceRanges[0]}</span>
              <span>{priceRanges[priceRanges.length - 1]}</span>
            </div>
          </div>

          {/* Color Filter */}
          <div className="mb-4">
            <label
              htmlFor="color"
              className="block text-gray-700 font-semibold mb-2"
            >
              Color
            </label>
            <select
              id="color"
              {...register("color")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Color</option>
              {colors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          {/* Features Filter */}
          <div className="mb-4">
            <label
              htmlFor="features"
              className="block text-gray-700 font-semibold mb-2"
            >
              Features
            </label>
            <select
              id="color"
              {...register("color")}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Select Features</option>
              {features.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>

          <Button
            className=" bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            htmlType="submit"
          >
            Filter
          </Button>
        </form>
      </div>
      <div className=" my-10 grid md:grid-cols-3 gap-3 justify-center ">
        {cars?.map((car: any) => (
          <Car key={car._id} carItem={car} />
        ))}
      </div>
    </div>
  );
};

export default CarListing;
