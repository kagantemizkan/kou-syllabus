import React, { useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Scrollbars } from 'react-custom-scrollbars';

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Programlarım } from "./pages/Programlarım";
import { ProgramHazirla } from "./pages/ProgramHazirla";
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
    path: "/my_schedule",
    element: <Programlarım />,
  },
  {
    path: "/edit_schedule",
    element: <ProgramHazirla />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <AuthContextProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthContextProvider>

);