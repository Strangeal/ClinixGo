import React from 'react';
import '../styles/appointment.css';
const Appointment = () => {
return (
  <div>
    <div className="container-fluid">
      <div className="row appointment-form">
        <div className="col-md-6 px-0">
          <div className="form-content d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-2">Appointment Request Form</h2>
            <p>Please fill in this form in order to book an appointment with our specialist. Mandatory fields are marked with an asterisk (*).</p>
            <img src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1677589027/undraw_medicine_b-1-ol_qujgrp.svg" alt=""  className="img-fluid appointment-img d-none d-md-inline" />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <form className="container px-md-5">
            <div className="form-group mb-2">
              <label htmlFor="full-time" className="appointment-label">Full name <span className="text-danger">*</span></label>
              <input type="text" className="form-control form-input shadow-none" placeholder="Full name" required />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="date" className="appointment-label">Date <span className="text-danger">*</span></label>
              <input type="date" className="form-control form-input shadow-none" placeholder="Date" required />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="state-time" className="appointment-label">Start Time <span className="text-danger">*</span></label>
              <input type="time" className="form-control form-input shadow-none" placeholder="Start Time" required />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="end-time" className="appointment-label">End Time <span className="text-danger">*</span></label>
              <input type="time" className="form-control form-input" placeholder="End Time" required />
            </div>
            <button type="button" className="mt-4 btn btn-success d-block w-100 rounded-pill">Book Appointment</button>
          </form>
        </div>    
      </div>
    </div>
  </div>
)
};
export default Appointment;