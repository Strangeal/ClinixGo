import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import AddDoctor from './add-doctor/AddDoctor';
import Demo from './Demo';
import Details from './Details';
import Doctors from './Doctors';
import Homepage from './Homepage';
import Navbar from './Navbar';
import NotFound from './NotFound';
import AppointmentCards from "./AppointmentCards";

const App = () => (
  <section className="container-fluid px-0">
    <div className="app-row position-relative">
      <div className="navigation">
        <Navbar />
      </div>
      <div className="main-routes">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/appointments" element={<AppointmentCards />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/add_doctor" element={<AddDoctor />} />
          <Route path="/all_doctors" element={<Doctors />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </section>
);

export default App;
