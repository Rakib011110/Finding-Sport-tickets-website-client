import React from "react";
import NavBar from "../Components/Pages/Share/Navber/Navber";
import { Outlet } from "react-router";

const Main = () => {
  return (
    <div>
      <div className="">
        <NavBar></NavBar>
      </div>

      <Outlet></Outlet>
    </div>
  );
};

export default Main;
