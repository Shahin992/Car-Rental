/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useState } from "react";
import { useReturnCarIntoDbMutation } from "../../../redux/features/Car/carApi";
import { toast } from "sonner";
import { useGetAllBookedQuery } from "../../../redux/features/book/bookApi";
import { VscLoading } from "react-icons/vsc";

const ManageReturnCars = () => {
  const [returnCarIntoDb] = useReturnCarIntoDbMutation();
  const [endTime, setEndTime] = useState("");
  const { data, isLoading } = useGetAllBookedQuery(undefined);
  const booked = data?.data;

  const handleReturnCar = async (id: string) => {
    const data = {
      bookingId: id,
      endTime,
    };
    const res = await returnCarIntoDb({ data }).unwrap();
    if (res.success === true) {
      toast.success(res.message, { duration: 1000 });
    }
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Return Cars</h1>
      <div className="overflow-x-auto p-4">
        <form>
          <table className="table w-full">
            <thead className="text-black bg-slate-300">
              <tr>
                <th>Sl</th>
                <th>Car Name</th>

                <th>Start Time</th>
                <th>End Time</th>
                <th>Total Cost</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isLoading && <>{VscLoading}</>}
              {booked ? (
                booked?.map((item: any, idx: any) => (
                  <tr key={item._id}>
                    {item.isBooked === "confirmed" && item.totalCost == 0 && (
                      <>
                        <th>
                          <h1>{idx + 1}</h1>
                        </th>
                        <td>
                          <div className="flex items-center gap-3">
                            <div className="avatar">
                              <div className="mask mask-squircle h-12 w-12">
                                <img src={item.carId.image} alt="" />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">
                                {item?.carId?.name || "Unknown Car"}
                              </div>
                              <div className="text-sm opacity-50">
                                {item.carId.description || "No Description"}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{item.payment?.startTime}</td>

                        <td>{item.endTime}</td>
                        <td>${item.totalCost}</td>

                        <td>
                          <Button>
                            <label htmlFor="my_modal_6" className="">
                              return car
                            </label>

                            <input
                              type="checkbox"
                              id="my_modal_6"
                              className="modal-toggle"
                            />
                            <div className="modal" role="dialog">
                              <div className="modal-box">
                                <h3 className="text-lg font-bold">Hello!</h3>
                                <p className="py-4">
                                  <label
                                    htmlFor="endTime"
                                    className="block mb-2"
                                  >
                                    End Time:
                                  </label>

                                  <input
                                    type="datetime-local"
                                    id="endTime"
                                    value={endTime}
                                    onChange={(e) => setEndTime(e.target.value)}
                                    className="p-2 border rounded mb-4 w-full"
                                    required
                                  />
                                </p>
                                <Button onClick={() => handleReturnCar(item)}>
                                  Submit
                                </Button>
                                <div className="modal-action">
                                  <label
                                    htmlFor="my_modal_6"
                                    className="cursor-pointer"
                                  >
                                    Close!
                                  </label>
                                </div>
                              </div>
                            </div>
                          </Button>
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
        </form>
      </div>
    </div>
  );
};

export default ManageReturnCars;
