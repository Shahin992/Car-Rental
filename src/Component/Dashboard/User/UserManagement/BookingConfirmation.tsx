/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import { useAppSelector } from "../../../../redux/app/hook";
import { useCurrnetUser } from "../../../../redux/features/auth/authSlice";
import { useAddBookedMutation } from "../../../../redux/features/book/bookApi";
import {
  useBookedCar,
  useconfiremBooking,
} from "../../../../redux/features/book/bookSlice";
import { TUser } from "../../../Types/Types";
import { useNavigate } from "react-router-dom";

const BookingConfirmation = () => {
  const [addBooked] = useAddBookedMutation();
  const useBooked: any = useAppSelector(useBookedCar);
  const navigate = useNavigate();
  const bookingDetails = useAppSelector(useconfiremBooking);
  const useUser = useAppSelector(useCurrnetUser) as TUser;
  const carId = useBooked?._id;

  const onConfirm = async () => {
    const bookedInfo = {
      payment: { ...bookingDetails, status: "Panding" },
      carId: carId,
    };
    const res = await addBooked(bookedInfo).unwrap();
    toast.success(res?.data.message);
    navigate("/user/booking-management");
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-base-100 shadow-xl rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">
        Review Your Booking
      </h1>

      <div className="card w-full bg-base-200 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title">User Information</h2>
          <p>
            <strong>Name:</strong> {useUser.name}
          </p>
          <p>
            <strong>Email:</strong> {useUser?.email}
          </p>
          <p>
            <strong>Phone:</strong> {useUser?.phone}
          </p>
        </div>
      </div>

      {/* Car Information */}
      <div className="card w-full bg-base-200 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title">Car Information</h2>
          <p>
            <strong>Car Name:</strong> {useBooked?.name}
          </p>
          <p>
            <strong>Description:</strong> {useBooked?.description}
          </p>
          <p>
            <strong>Color:</strong> {useBooked?.color}
          </p>
          <p>
            <strong>Features:</strong> {useBooked?.features?.join(", ")}
          </p>
          <p>
            <strong>Price Per Hour:</strong> {useBooked?.pricePerHour}
          </p>
        </div>
      </div>

      {/* Payment Information */}
      <div className="card w-full bg-base-200 shadow-sm mb-6">
        <div className="card-body">
          <h2 className="card-title">Payment Information</h2>
          <p>
            <strong>NID/Passport:</strong> {bookingDetails.nidOrPassport}
          </p>
          <p>
            <strong>Driving License:</strong> {bookingDetails.drivingLicense}
          </p>
          <p>
            <strong>Card Number:</strong> {bookingDetails.cardNumber}
          </p>
          <p>
            <strong>Expiration Date:</strong> {bookingDetails.expirationDate}
          </p>
          <p>
            <strong>CVV:</strong> {bookingDetails.cvv}
          </p>
        </div>
      </div>

      {/* Confirmation Button */}
      <div className="flex justify-end space-x-4 mt-6">
        <button onClick={onConfirm} className="btn btn-primary">
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
