/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "sonner";
import {
  useDeleteBookedMutation,
  useGetMyBookQuery,
} from "../../../../redux/features/book/bookApi";

const Booking = () => {
  const { data } = useGetMyBookQuery(undefined);
  const booked = data?.data;
  const [deletedBooked] = useDeleteBookedMutation();

  const handleCancel = async (bookedId: string) => {
    // Handle cancel booking logic here
    console.log("Cancel booking with ID:", bookedId);
    const res = await deletedBooked({ bookedId }).unwrap();
    if (res.success === true) {
      toast.success(res.message, { duration: 1000 });
    }
    console.log(res);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Booking Management</h1>
      <div className="overflow-x-auto p-4">
        <table className="table w-full">
          <thead className="bg-slate-300 text-black">
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
            {booked ? (
              booked?.map((item: any, idx: any) => (
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
                    {item.isBooked === "confirmed" ? (
                      <>
                        <p className="bg-blue-700 text-white px-3 text-center py-1 rounded">
                          approval
                        </p>
                      </>
                    ) : (
                      <div>
                        {" "}
                        <a onClick={() => handleCancel(item._id)}>Cancel</a>
                      </div>
                    )}
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

export default Booking;
