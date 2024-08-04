import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout, DashboardLayout } from "@/layouts";

const LoadComponent = (Component: React.ComponentType) => {
  return (
    <React.Suspense fallback={<p>Loading</p>}>
      <Component />
    </React.Suspense>
  );
};

/**
 * Error Page
 */
const ErrorPage = LoadComponent(React.lazy(() => import("@/views/system/ErrorPage")));

/**
 * Auth Pages
 */
const LoginPage = LoadComponent(React.lazy(() => import("@/views/auth/LoginPage")));

/**
 * Dashboard Pages
 */
const DashboardHomePage = LoadComponent(React.lazy(() => import("@/views/dashboard/HomePage")));

export default createBrowserRouter([
  {
    path: "*",
    element: ErrorPage,
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: LoginPage,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: DashboardHomePage,
      },
    ],
  },
]);
