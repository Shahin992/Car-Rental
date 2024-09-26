/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetMyBookQuery } from "../../../../redux/features/book/bookApi";
import { Button } from "antd";
import { useAppDispatch } from "../../../../redux/app/hook";

import { paymentInformation } from "../../../../redux/features/book/bookSlice";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { data } = useGetMyBookQuery(undefined);
  const dispatch = useAppDispatch();
  const navidate = useNavigate();
  const booked = data?.data;
  console.log(booked);

  const handlePayment = async (payment: string) => {
    dispatch(paymentInformation(payment));
    navidate("/user/payment-confirmation");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Management</h1>
      <div className="overflow-x-auto p-4">
        <table className="table w-full">
          <thead>
            <tr className="text-sm text-black bg-slate-300">
              <th>Sl</th>
              <th>Car Name</th>

              <th>Start Time</th>
              <th>End Time</th>
              <th>Total Cost</th>
              <th>Paymant</th>
            </tr>
          </thead>
          <tbody>
            {booked ? (
              booked?.map((item: any, idx: any) => (
                <tr key={item._id}>
                  {item?.isBooked === "confirmed" && item?.totalCost > 0 && (
                    <>
                      <th>
                        <h1>{idx + 1}</h1>
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={item?.carId?.image} alt="" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">
                              {item?.carId?.name || "Unknown Car"}
                            </div>
                            <div className="text-sm opacity-50">
                              {item?.description || "No Description"}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{item?.payment?.startTime}</td>

                      <td>{item?.endTime}</td>
                      <td>${item?.totalCost}</td>

                      <td>
                        {item?.paymentStatus === "Pending" ? (
                          <>
                            <p>
                              <Button onClick={() => handlePayment(item)}>
                                Proceed To Payment
                              </Button>
                            </p>
                          </>
                        ) : (
                          <>
                            <p className="bg-blue-700 text-white px-3 text-center py-1 rounded">
                              Paid
                            </p>
                          </>
                        )}
                      </td>
                    </>
                  )}
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

export default Payment;
