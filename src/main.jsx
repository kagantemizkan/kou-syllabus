import React, { useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Programlarım } from "./pages/Programlarım";
import { ProgramHazirla } from "./pages/ProgramHazirla";
import { DersSecimi } from "./pages/DersSecimi";
import { Settings } from "./pages/Settings";

import { AuthContextProvider } from "./context";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/my_schedule",
    element: <Programlarım />,
  },
  {
    path: "/edit_schedule",
    element: <ProgramHazirla />,
  },
  {
    path: "/ders_secimi",
    element: <DersSecimi />,
  },
  {
    path: "/ayarlar",
    element: <Settings />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthContextProvider>

);