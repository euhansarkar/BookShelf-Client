import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";

const AdminRoutes = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  if(loading || isAdminLoading){
    return <p>loading</p>
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={`login`} state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
