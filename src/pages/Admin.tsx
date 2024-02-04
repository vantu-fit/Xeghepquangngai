import React from "react";
import HeaderA from "../Components/admin/HeaderA";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <HeaderA />
      <Outlet />
    </>
  );
}

export default Admin;
