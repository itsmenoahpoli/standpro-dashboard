import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "@/layouts";

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
]);
