import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../../../redux/app/hook";
import {
  signUser,
  useCurrnetToken,
  useCurrnetUser,
} from "../../../../redux/features/auth/authSlice";
import { useUpdateUserMutation } from "../../../../redux/features/user/userApi";
import { useNavigate } from "react-router-dom";
import { TUser } from "../../../Types/Types";

const UserUpdate = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useAppSelector(useCurrnetToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TUser>();
  const [userUpdateIntoDb] = useUpdateUserMutation();

  const user = useAppSelector(useCurrnetUser) as unknown as TUser;

  const { address, email, name, phone, _id: userID } = user;
  console.log("user id", userID);
  const onSubmit: SubmitHandler<TUser> = async (data) => {
    console.log("data", data);
    const res = await userUpdateIntoDb({ userID, data }).unwrap();
    console.log("res", res.data);
    const userData = res.data;
    dispatch(signUser({ userData, token }));

    if (res?.success === true) {
      toast.success("Profile updated successfully!");
      navigate("/user/dashboard");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-6">
      <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            id="name"
            defaultValue={name}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            disabled
            value={email}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            {...register("phone")}
            type="tel"
            defaultValue={phone}
            id="phone"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="address">
            Address
          </label>
          <input
            defaultValue={address}
            {...register("address")}
            type="text"
            id="address"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UserUpdate;
