import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import PropertyTitle from "./pages/PropertyTitle";
import Admin from "./pages/Admin";
import AddPost from "./Components/admin/AddPost";
import AddPrice from "./Components/admin/AddPrice";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-ticket" element={<Booking />} />
      <Route path="/chi-tiet/:id" element={<PropertyTitle />} />
      <Route path="/admin" element={<Admin />}>
        <Route path="create-post" element={<AddPost />} />
        <Route path="create-price" element={<AddPrice />} />
      </Route>
    </Routes>
  );
}

export default App;
