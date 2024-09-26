import Booking from "../Component/Dashboard/User/Booking/Booking";
import Payment from "../Component/Dashboard/User/Payment/Payment";
// import UserManagement from "../Component/Dashboard/User/UserManagement/UserManagement";
import UserProfile from "../Component/Dashboard/User/UserManagement/UserProfile";

export const UserRoute = [
  {
    name: "Profile",
    path: "dashboard",
    element: <UserProfile />,
  },

  {
    name: "Booking Management",
    path: "booking-management",
    element: <Booking />,
  },
  {
    name: "Payment Management",
    path: "payment-management",
    element: <Payment />,
  },
];
