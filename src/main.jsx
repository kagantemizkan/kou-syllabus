import React, { useEffect } from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { Home } from "./pages/Home";
import PnrSorgula from "./pages/PnrSorgula";
import { AuthContextProvider } from "./context";
import Sss from "./pages/Sss";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pnr-sorgu",
      element: <PnrSorgula />,
    },
    {
      path: "sss",
      element: <Sss/>
    }
  ]);

  return (
    <AuthContextProvider>
      <React.StrictMode>
        <AuthContextProvider>
          <RouterProvider router={router} />
        </AuthContextProvider>
      </React.StrictMode>
    </AuthContextProvider>
  );
};

// Render the main application
ReactDOM.createRoot(document.getElementById("root")).render(<App />);