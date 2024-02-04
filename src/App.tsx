import "./App.css";

import React from "react";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Service from "./pages/Service";
import Price from "./pages/Price";
import PostInfo from "./pages/PostInfo";
import ContactPage from "./pages/Contact";
import Admin from "./pages/Admin";
function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dich-vu-xe-quang-ngai-da-nang" element={<Service />} />
      <Route path="bang-gia-thue-xe-quang-ngai-da-nang" element={<Price />} />
      <Route path="chi-tiet-dich-vu" element={<Service />} />
      <Route path="chi-tiet-dich-vu/:id" element={<PostInfo />} />
      <Route path="lien-he" element={<ContactPage />} />
      <Route path="admin" element={<Admin />} />


    </Routes>
  );
}

export default App;
