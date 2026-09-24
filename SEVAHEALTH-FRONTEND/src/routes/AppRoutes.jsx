import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/Dashboard";
import Facilities from "../pages/Facilities";
import Appointments from "../pages/Appointments";
import Teleconsultation from "../pages/Teleconsultation";
import Medicines from "../pages/Medicines";
import HealthRecords from "../pages/HealthRecords";
import Emergency from "../pages/Emergency";
import About from "../pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/facilities" element={<Facilities />} />

      <Route path="/appointments" element={<Appointments />} />
     
      <Route
  path="/teleconsultation"
  element={<Teleconsultation />}
/>
<Route path="/medicines" element={<Medicines />} />
<Route path="/health-records" element={<HealthRecords />} />
<Route path="/emergency" element={<Emergency />} />
    </Routes>
  );
}

export default AppRoutes;