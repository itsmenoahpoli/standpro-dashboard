import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthHook } from "@/hooks/auth.hook";
import { APP_ROUTES } from "@/constants";

export const DashboardLayout: React.FC = () => {
  const { isAuthenticated } = useAuthHook();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate(APP_ROUTES.AUTH_LOGIN);
      toast.warning("You must login to access the dashboard");
    }
  }, []);
  return <div>DashboardLayout</div>;
};
