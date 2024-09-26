import { Button } from "antd";
import { toast } from "sonner";
import { usePaymentOfCustomerMutation } from "../../../../../redux/features/book/bookApi";
import { useAppSelector } from "../../../../../redux/app/hook";
import { usepaymentInfo } from "../../../../../redux/features/book/bookSlice";

const PaymentConfirmation = () => {
  const [orderPayment] = usePaymentOfCustomerMutation();
  const payment = useAppSelector(usepaymentInfo);
  console.log(payment);

  const handleDownloadReceipt = async () => {
    // Implement the logic to download or print the receipt
    const res = await orderPayment({ payment }).unwrap();
    console.log(res);
    if (res.success === true) {
      toast.success("your payment is loading", { duration: 1000 });
      window.location.href = res.data.payment_url;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Payment Confirmation</h1>
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
        <div className="mb-4">
          <p className="text-lg font-medium">User Name: {payment?.user.name}</p>
          <p className="text-lg font-medium">Car Name: {payment?.carId.name}</p>
          <p className="text-lg font-medium">
            Start Time: {payment?.payment.startTime}
          </p>
          <p className="text-lg font-medium">End Time: {payment?.endTime}</p>
          <p className="text-lg font-medium">
            Total Cost: ${payment?.totalCost}
          </p>
          <p className="text-lg font-medium">
            Payment Status: {payment?.paymentStatus}
          </p>
        </div>
        <div className="mt-6">
          <Button
            type="primary"
            onClick={handleDownloadReceipt}
            className="mr-4"
          >
            Pay to your due
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
