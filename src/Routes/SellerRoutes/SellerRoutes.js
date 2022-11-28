import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useSeller from "../../hooks/useSeller";

const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const [isSeller, isSellerLoading] = useSeller(user?.email);
  if(loading || isSellerLoading){
    return <p>loading</p>
  }
  if (user && isSeller) {
    return children;
  }
  return <Navigate to={`/login`} state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
