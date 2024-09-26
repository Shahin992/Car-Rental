/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm, SubmitHandler } from "react-hook-form";
import { TCar } from "../../../Types/Types";

import { useUpdateCarIntoDbMutation } from "../../../../redux/features/Car/carApi";
import { toast } from "sonner";
import { useAppDispatch } from "../../../../redux/app/hook";
import { carUpdate } from "../../../../redux/features/Car/CarSlice";

interface UpdateCarProps {
  car: TCar;
  onClose: () => void;
}

const UpdateCar = ({ car, onClose }: UpdateCarProps) => {
  const dispatch = useAppDispatch();
  const [handleUpdateData] = useUpdateCarIntoDbMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCar>({
    defaultValues: car,
  });

  const onSubmitForm: SubmitHandler<TCar> = async (data) => {
    try {
      const res = await handleUpdateData({ id: car._id, data }).unwrap();
      dispatch(carUpdate(car._id));
      toast.success(res.message);
      onClose();
    } catch (error) {
      toast.error("Update failed. Please try again.");
    }
  };

  return (
    <div className="modal modal-open" role="dialog">
      <div className="modal-box w-full max-w-3xl">
        <h3 className="text-md font-bold mb-4">Update Car Details</h3>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          className="bg-white rounded-lg text-left shadow-md p-4"
        >
          <div className="grid grid-cols-1 gap-4">
            <div className="mb-3">
              <label
                className="block text-sm text-gray-700 mb-1"
                htmlFor="name"
              >
                Car Name
              </label>
              <input
                {...register("name")}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.name ? "border-red-500" : ""
                }`}
                id="name"
                type="text"
                placeholder="Car Name"
              />
            </div>

            <div className="flex gap-5 items-center">
              <div className="mb-3">
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="color"
                >
                  Color
                </label>
                <input
                  {...register("color")}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="color"
                  type="text"
                  placeholder="Car Color"
                />
              </div>
              <div className="mb-3">
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="pricePerHour"
                >
                  Price Per Hour
                </label>
                <input
                  {...register("pricePerHour")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.pricePerHour ? "border-red-500" : ""
                  }`}
                  id="pricePerHour"
                  type="number"
                  placeholder="Price per hour"
                />
              </div>
              <div className="mb-3 flex items-center">
                <input
                  {...register("isElectric")}
                  className="mr-2 leading-tight"
                  id="isElectric"
                  type="checkbox"
                />
                <label className="text-sm text-gray-700" htmlFor="isElectric">
                  Electric
                </label>
              </div>
            </div>
            <div className="mb-3">
              <label
                className="block text-sm text-gray-700 mb-1"
                htmlFor="features"
              >
                Features
              </label>
              <input
                {...register("features")}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.features ? "border-red-500" : ""
                }`}
                id="features"
                type="text"
                placeholder="Car Features"
              />
            </div>
            <div className="mb-3">
              <label
                className="block text-sm text-gray-700 mb-1"
                htmlFor="status"
              >
                Status
              </label>
              <select
                {...register("status")}
                id="status"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCar;
