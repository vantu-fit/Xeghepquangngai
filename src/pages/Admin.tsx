import React from "react";
import HeaderA from "../Components/admin/HeaderA";
import AddPost from "../Components/admin/AddPost";
import { Routes, Route, Outlet } from "react-router-dom";

function Admin() {
  return (
    <>
      <HeaderA />
      <Outlet />
    </>
  );
}

export default Admin;
