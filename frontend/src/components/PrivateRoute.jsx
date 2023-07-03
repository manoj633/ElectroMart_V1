import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const PrivateRoute = () => {
  const userInfo = useSelector((state) => state.auth);
  if (!userInfo.userInfo) {
    // Redirect to the login page if userInfo is null or empty
    return <Navigate to="/login" replace />;
  }

  // Render the Outlet component if userInfo exists
  return <Outlet />;
};

export default PrivateRoute;
