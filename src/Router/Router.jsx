import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayouts/Main";
import Home from "../Components/Pages/Homes/Home/Home";
import Login from "../Components/Pages/Share/Login/Login";
import Register from "../Components/Pages/Share/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register />,
      },
    ],
  },
]);

export default router;
