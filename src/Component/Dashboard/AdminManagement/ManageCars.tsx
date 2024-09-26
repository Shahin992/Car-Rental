/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  useDeleteCarMutation,
  useGetAllCarQuery,
} from "../../../redux/features/Car/carApi";
import { CgSpinner } from "react-icons/cg";
import { TCar } from "../../Types/Types";
import { BiEdit, BiTrash } from "react-icons/bi";
import AddNewCar from "./AddNewCar/AddNewCar";

import UpdateCar from "./UpdateCar/UpdateCar";
import { toast } from "sonner";

const ManageCars = () => {
  const { data, isLoading } = useGetAllCarQuery(undefined);
  const [deletedCar] = useDeleteCarMutation();
  const [selectedCar, setSelectedCar] = useState<TCar | null>(null);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <CgSpinner className="text-4xl" />
      </div>
    );
  }

  const totalCars = data?.data;

  const handleDelete = async (carId: string) => {
    try {
      const res = await deletedCar({ carId }).unwrap();
      if (res.data.deletedCount > 0) {
        toast.success(res.message);
      }
    } catch (error) {
      toast.error("Failed to delete car.");
    }
  };

  const handleUpdate = (carInfo: TCar) => {
    setSelectedCar(carInfo);
    // Open the modal here
  };

  const closeUpdateModal = () => {
    setSelectedCar(null);
  };

  return (
    <div className="my-5">
      <div>
        <h1 className="text-2xl border-b-2 text-center uppercase my-4 py-5">
          Manage Cars
          <AddNewCar />
        </h1>
      </div>
      <div className="overflow-x-auto p-4">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Car Name</th>
              <th>Features</th>
              <th>Price Per Hour</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {totalCars ? (
              totalCars.map((item: TCar, idx: number) => (
                <tr key={item._id}>
                  <th>
                    <h1>{idx + 1}</h1>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src="/src/assets/image/image.png" alt="" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {item.name || "Unknown Car"}
                        </div>
                        <div className="text-sm opacity-50">
                          {item.description || "No Description"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.features.join(", ")}</td>
                  <td>{item.pricePerHour}</td>
                  <td>{item.status}</td>
                  <td>
                    <div className="flex gap-3 items-center text-2xl">
                      <button onClick={() => handleUpdate(item)}>
                        <BiEdit className="text-blue-500" />
                      </button>
                      <button onClick={() => handleDelete(item._id as string)}>
                        <BiTrash className="text-yellow-400 font-bold" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center">
                  No cars found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Render UpdateCar component conditionally */}
      {selectedCar && (
        <UpdateCar car={selectedCar} onClose={closeUpdateModal} />
      )}
    </div>
  );
};

export default ManageCars;
