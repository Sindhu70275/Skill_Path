import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../features/auth/context/AuthContext.jsx";

const AdminLayout = () => {
  const { user } = useContext(AuthContext);

  if (user?.role !== "admin") {
    return <Navigate to="/discover" replace />;
  }

  return <Outlet />;
};

export default AdminLayout;
