import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import axios from "../config/axios";
import useAuth from "../hooks/useAuh";

const PrivateRoute = () => {
  const { user, login } = useAuth();
  const location = useLocation();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        const refreshResponse = await axios.get("/auth/refresh");
        login(refreshResponse?.data?.user);
      } catch (error) {
        console.error(error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    if (!user) {
      verifyRefreshToken();
    } else {
      setLoading(false);
    }

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
