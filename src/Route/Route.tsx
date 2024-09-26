import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Component/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import CarListing from "../pages/Car Listing/CarListing";
import CarDetails from "../pages/Car Listing/car/carDetails";
import AboutUs from "../pages/About us/AboutUs";
import Error404 from "../pages/error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";
import Dashboard from "../Component/Dashboard/Dashboard";

import { routeGenarator } from "../utils/routeGnarator";
import { AdminRoute } from "./Admin.Route";
import { UserRoute } from "./User.Route";
import { ProtectedRoute } from "./ProtactedRoute/ProtactedRoute";
import UserUpdate from "../Component/Dashboard/User/UserManagement/UserUpdate";
import BookingForm from "../Component/Dashboard/User/Booking/BookingFrom";
import BookingConfirmation from "../Component/Dashboard/User/UserManagement/BookingConfirmation";
import PrivacyPolicy from "../pages/PrivacyPolicy/PrivacyPolicy";
import ContactPage from "../pages/Contact/Contact";
import PaymentConfirmation from "../Component/Dashboard/User/Payment/PaymentConfirmation/PaymentConfirmation";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/car-listing",
        element: <CarListing />,
      },
      {
        path: "/car-details/:carId",
        element: <CarDetails />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "booking",
        element: (
          <ProtectedRoute>
            <BookingForm />
          </ProtectedRoute>
        ),
      },
      {
        path: "user/booking-confirmation",
        element: (
          <ProtectedRoute>
            <BookingConfirmation />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Register />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: routeGenarator(AdminRoute),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: routeGenarator(UserRoute),
  },
  {
    path: "/user",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "payment-confirmation",
        element: <PaymentConfirmation />,
      },
    ],
  },

  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "user/dashboard/user-update",
        element: <UserUpdate />,
      },
    ],
  },
]);
