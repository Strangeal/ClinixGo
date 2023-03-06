import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/App.css";
import AddDoctor from "./add-doctor/AddDoctor";
import Appointment from "./Appointment";
import AppointmentCards from "./AppointmentCards";
import Details from "./Details";
import Doctors from "./Doctors";
import Homepage from "./Homepage";
import Login from "./Login";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import Register from "./Register";

const App = () => (
  <section className="container-fluid px-0">
    <ToastContainer />
    <div className="app-row position-relative">
      <div className="navigation">
        <Navbar />
      </div>
      <div className="main-routes">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/appointments" element={<AppointmentCards />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/add_doctor" element={<AddDoctor />} />
          <Route path="/add_appointment" element={<Appointment />} />
          <Route path="/all_doctors" element={<Doctors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </section>
);

export default App;
