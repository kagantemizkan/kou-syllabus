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

const App = () => {

  
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

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

  return (
    <AuthContextProvider>
      <React.StrictMode>
        {/* RouterProvider inside AuthContextProvider */}
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </React.StrictMode>
    </AuthContextProvider>
  );
};

// Render the main application
ReactDOM.createRoot(document.getElementById("root")).render(<App />);