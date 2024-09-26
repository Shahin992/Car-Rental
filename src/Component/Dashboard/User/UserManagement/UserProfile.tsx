import { MdEmail } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../../redux/app/hook";
import { useCurrnetUser } from "../../../../redux/features/auth/authSlice";
import { FaEdit, FaPhoneVolume } from "react-icons/fa";

import { BiHome } from "react-icons/bi";
import { Button } from "antd";
import { Link } from "react-router-dom";
import BookingHistory from "./BookingHistory";
import { useGetMyBookQuery } from "../../../../redux/features/book/bookApi";
import { gettAllbookedHsitory } from "../../../../redux/features/book/bookSlice";
import { TUser } from "../../../Types/Types";

const UserProfile = () => {
  const user = useAppSelector(useCurrnetUser) as unknown as TUser;
  const myBooked = useAppDispatch();

  const { address, email, name, phone } = user || null;
  const { data, error, isLoading } = useGetMyBookQuery(undefined);
  const bookingData = data?.data;
  console.log("booking data", bookingData);
  myBooked(gettAllbookedHsitory(bookingData));

  return (
    <div className="">
      <div className="border-b-2  ">
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className="flex items-center gap-5 mb-5">
          <h1 className="text-2xl">Hello {name}</h1>
          <Link to="user-update">
            <Button>
              {" "}
              <FaEdit className="text-2xl" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-4 text-2xl">
          <MdEmail className="text-2xl" />
          <h1>{email}</h1>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <BiHome className="text-2xl" />
          <h1>{address}</h1>
        </div>
        <div className="flex items-center gap-4 text-2xl">
          <FaPhoneVolume className="text-2xl" />
          <h1>{phone}</h1>
        </div>
      </div>
      {isLoading && <p className="text-center">Loading...</p>}{" "}
      {error && (
        <p className="text-center text-red-500">Error fetching bookings.</p>
      )}
      <div>
        <BookingHistory />
      </div>
    </div>
  );
};

export default UserProfile;
