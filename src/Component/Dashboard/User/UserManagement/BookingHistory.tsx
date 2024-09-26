/* eslint-disable @typescript-eslint/no-explicit-any */

import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../redux/app/hook";
import { useBookhitory } from "../../../../redux/features/book/bookSlice";

const BookingHistory = () => {
  const bookingData: any = useAppSelector(useBookhitory);
  console.log("booking data", bookingData);
  return (
    <div className="my-5">
      <div>
        <h1 className="text-2xl border-b-2 text-center uppercase my-4 py-5">
          Booking History
        </h1>
      </div>
      <div className="overflow-x-auto p-4">
        <table className="table w-full">
          <thead className="bg-slate-300 text-black">
            <tr>
              <th>Sl</th>
              <th>Car Name</th>

              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Cost</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookingData ? (
              bookingData.map((item: any, idx: any) => (
                <tr key={item._id}>
                  <th>
                    <h1>{idx + 1}</h1>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item?.carId?.image || "Unknown Car"}
                            alt=""
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">
                          {item?.carId?.name || "Unknown Car"}
                        </div>
                        <div className="text-sm opacity-50">
                          {item?.carId?.description || "No Description"}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.payment?.startTime}</td>

                  <td>{item.endTime}</td>
                  <td>${item.totalCost}</td>
                  <td>
                    <span
                      className={`badge ${
                        item.isBooked === "confirmed"
                          ? "badge-success text-white px-2 py-1"
                          : "badge-error"
                      }`}
                    >
                      {item.isBooked}
                    </span>
                  </td>
                  <td>
                    <Link to={`/car-details/${item?.carId?._id}`}>
                      <button className="btn btn-ghost btn-xs">Details</button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="text-center">
                  No bookings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingHistory;
