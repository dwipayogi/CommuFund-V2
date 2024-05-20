import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginUser from "./components/LoginAkun.jsx";
import LoginOrganisasi from "./components/LoginOrganisasi.jsx";
import RegisterAkun from "./components/RegisterAkun.jsx";
import RegisterOrganisasi from "./components/RegisterOrganisasi.jsx";
import BuatProyek from "./components/BuatProyek.jsx";
import Dashboard from "./components/Dashboard.jsx";
import "./index.css";
import ErrorPage from "./error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login/akun",
    element: <LoginUser />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login/organisasi",
    element: <LoginOrganisasi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register/akun",
    element: <RegisterAkun />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register/organisasi",
    element: <RegisterOrganisasi />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/add",
    element: <BuatProyek />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
