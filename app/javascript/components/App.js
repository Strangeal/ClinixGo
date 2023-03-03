import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/App.css';
import Appointment from './Appointment';
import Details from './Details';
import Homepage from './Homepage';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Register from './Register';
import Login from './Login';

import AppointmentCards from './AppointmentCards';

const App = () => {
  return (
    <section className="container-fluid px-0">
    <ToastContainer />
    <div className="row">
    <div className="col-2">
        <Navbar />
      </div>
      <div className="col-10">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointments" element={<AppointmentCards />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
    </div>
    </section>
  );
};

export default App;
