import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../MainLayouts/Main";
import Home from "../Components/Pages/Homes/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
