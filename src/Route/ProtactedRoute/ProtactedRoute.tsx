import { ReactNode } from "react";
import { useAppSelector } from "../../redux/app/hook";
import { useCurrnetToken } from "../../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const token = useAppSelector(useCurrnetToken);
  if (!token) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
};
