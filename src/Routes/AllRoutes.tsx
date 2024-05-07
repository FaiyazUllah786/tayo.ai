import React from "react";
import ContactPage from "../Pages/ContactPage";
import ChartPage from "../Pages/ChartPage";
import { Route, Routes } from "react-router-dom";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
