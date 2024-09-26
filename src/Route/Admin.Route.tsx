import AdminDashboard from "../Component/Dashboard/AdminManagement/AdminDashboard";
import ManageBookings from "../Component/Dashboard/AdminManagement/ManageBookings";

import ManageCars from "../Component/Dashboard/AdminManagement/ManageCars";
import ManageReturnCars from "../Component/Dashboard/AdminManagement/ManageReturnCars";
import UserManage from "../Component/Dashboard/AdminManagement/UserManage";

export const AdminRoute = [
  {
    name: "Admin Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    name: "Manage Bookings",
    path: "manage-booking",
    element: <ManageBookings />,
  },
  {
    name: "Manage Cars",
    path: "manage-cars",
    element: <ManageCars />,
  },
  {
    name: "Manage Return Cars",
    path: "manage-return-cars",
    element: <ManageReturnCars />,
  },
  {
    name: "User Management",
    path: "user-manage",
    element: <UserManage />,
  },
];
