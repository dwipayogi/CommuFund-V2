import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./components/Login.jsx";
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
    path: "/login",
    element: <Login />,
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
