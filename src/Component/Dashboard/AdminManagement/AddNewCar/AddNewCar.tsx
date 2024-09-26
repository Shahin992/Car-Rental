/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from "react-hook-form";
import { TCar } from "../../../Types/Types";
import { CgAdd } from "react-icons/cg";
import { useAddNewCarIntoDbMutation } from "../../../../redux/features/Car/carApi";
import { toast } from "sonner";
import { uploadImage } from "./UploadImage";

const AddNewCar = () => {
  const [AddNewCarIntoDb] = useAddNewCarIntoDbMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TCar>();

  const onSubmitForm: SubmitHandler<TCar> = async (data) => {
    if (data.image && data.image.length > 0) {
      try {
        const file = data.image[0] as any;
        const imageUrl = await uploadImage(file);
        data.image = imageUrl;
      } catch (error: any) {
        toast.error("Failed to upload image", error);
        return;
      }
    }
    if (typeof data.features === "string") {
      data.features = (data.features as string)
        ?.split(",")
        .map((feature: string) => feature.trim());
    }
    if (typeof data.AdditionalFeatures === "string") {
      data.AdditionalFeatures = (data.AdditionalFeatures as string)
        ?.split(",")
        .map((feature: string) => feature.trim());
    }
    const res = await AddNewCarIntoDb({ data }).unwrap();
    if (res.success === false) {
      toast.error(res.message);
    }
    toast.success(res.message, {
      action: (
        <>
          <label htmlFor="my_modal_6" className="btn">
            X
          </label>
        </>
      ),
      duration: 3000,
    });
  };

  return (
    <div>
      <label
        htmlFor="my_modal_7"
        className="cursor-pointer flex gap-3 items-center"
      >
        <CgAdd className="text-3xl" /> Add New Car
      </label>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box w-full max-w-3xl">
          <h3 className="text-md font-bold mb-4">Add New Car Details</h3>
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
                  {...register("name", { required: "Car name is required" })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  id="name"
                  type="text"
                  placeholder="Car Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex  gap-5 items-center ">
                <div className="mb-3">
                  <label
                    className="block text-sm text-gray-700 mb-1"
                    htmlFor="color"
                  >
                    Color
                  </label>
                  <input
                    {...register("color", { required: "Color is required" })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.color ? "border-red-500" : ""
                    }`}
                    id="color"
                    type="text"
                    placeholder="Car Color"
                  />
                  {errors.color && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.color.message}
                    </p>
                  )}
                </div>
                <div className="mb-3 ">
                  <label
                    className="block text-sm text-gray-700 mb-1"
                    htmlFor="pricePerHour"
                  >
                    Price Per Hour
                  </label>
                  <input
                    {...register("pricePerHour", {
                      required: "Price per hour is required",
                      valueAsNumber: true,
                    })}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                      errors.pricePerHour ? "border-red-500" : ""
                    }`}
                    id="pricePerHour"
                    type="number"
                    placeholder="Price per hour"
                  />
                  {errors.pricePerHour && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.pricePerHour.message}
                    </p>
                  )}
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
              <div className="grid md:grid-cols-2 gap-4">
                <div className="mb-3">
                  <label
                    className="block text-sm text-gray-700 mb-1"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <select
                    {...register("status")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="status"
                  >
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label
                    className="block text-sm text-gray-700 mb-1"
                    htmlFor="carType"
                  >
                    Car type
                  </label>
                  <select
                    {...register("carType")}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="carType"
                  >
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatch Back">Hatch Back</option>
                    <option value="Convertable">Convertable</option>
                  </select>
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
                  {...register("features", {
                    required: "At least one feature is required",
                  })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.features ? "border-red-500" : ""
                  }`}
                  id="features"
                  type="text"
                  placeholder="Comma-separated features"
                />
                {errors.features && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.features.message}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="AdditionalFeatures"
                >
                  Additional Features
                </label>
                <input
                  {...register("AdditionalFeatures", {
                    required: "At least one feature is required",
                  })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.AdditionalFeatures ? "border-red-500" : ""
                  }`}
                  id="AdditionalFeatures"
                  type="text"
                  placeholder="Comma-separated features"
                />
                {errors.AdditionalFeatures && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.AdditionalFeatures.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.description ? "border-red-500" : ""
                  }`}
                  id="description"
                  placeholder="Enter car description"
                />
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm text-gray-700 mb-1"
                  htmlFor="description"
                >
                  Upload Image
                </label>
                <input
                  type="file"
                  {...register("image")}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                    errors.image ? "border-red-500" : ""
                  }`}
                  id="image"
                  placeholder="Enter image"
                />
              </div>
            </div>

            <div className="flex items-center justify-end mt-6"></div>

            <div className="modal-action">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add New Car
              </button>
              <label htmlFor="my_modal_7" className="btn">
                Close
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewCar;
