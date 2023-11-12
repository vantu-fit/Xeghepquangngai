import "./App.css";

import React from "react";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import AddPost from "./Components/admin/AddPost";
import AddPrice from "./Components/admin/AddPrice";
import Header from "./Components/Header";
import { Footer } from "flowbite-react";
import { Route, Routes } from "react-router-dom";
import Service from "./pages/Service";
import Price from "./pages/Price";
import PostInfo from "./pages/PostInfo";
import ContactPage from "./pages/ContactPage";
function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dich-vu-xe-quang-ngai-da-nang" element={<Service />} />
      <Route path="bang-gia-thue-xe-quang-ngai-da-nang" element={<Price />} />
	      <Route path="chi-tiet-dich-vu" element={<Service />} />
      <Route path="chi-tiet-dich-vu/:id" element={<PostInfo />} />
      <Route path="lien-he" element={<ContactPage/>}/>

      {/* <Route path="/book-ticket" element={<Booking />} />
      <Route path="/chi-tiet/:id" element={<PropertyTitle />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="create-post" element={<AddPost />} />
        <Route path="create-price" element={<AddPrice />} />
      </Route> */}
    </Routes>
    // <Home />
  );
}

export default App;
