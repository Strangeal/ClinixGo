/* eslint-disable import/no-extraneous-dependencies */
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { BiTime } from 'react-icons/bi';
import {
  BsFileEarmarkPerson,
  BsFillCalendarDateFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { GrStatusCriticalSmall } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppointData } from '../redux/appointments/appointmentSlice';
import { currentUser } from '../redux/user/userSlice';
import '../styles/AppointmentCards.css';
import Spinner from './Spinner';

const AppointmentCards = () => {
  const dispatch = useDispatch();
  const { appointments, status } = useSelector((state) => state.appointments);
  const user = useSelector(currentUser);

  useEffect(() => {
    dispatch(fetchAppointData());
  }, [dispatch]);

  return (
    <section className="container text-center appointments-section">
      <div className="header-section">
        <h1 className="appointment-header">Appointments</h1>
        <h5 className="patient">
          <BsFillPersonFill className="app-icons" />
          Patient:
          {' '}
          {user.username}
        </h5>
      </div>
      <div className="cards">
        {status === null
          || (status === 'pending' && (
            <>
              <div className="spinner-here">
                <Spinner />
              </div>
            </>
          ))}
        {appointments && appointments.length === 0 && (
          <>
            <div className="no-content text-muted align-center">
              No Appointment
            </div>
          </>
        )}
        {appointments
          && appointments.map((appointment) => (
            <div key={appointment.id} className="container background-of-card">
              <img
                src={appointment.doctor_photo}
                alt="Avatar"
                className="card-image"
              />
              <div className="content">
                <span>
                  <BsFileEarmarkPerson className="app-icons" />
                  <b>Doctor: </b>
                  {appointment.doctor_name}
                </span>
                <span>
                  <BsFillCalendarDateFill className="app-icons" />
                  <b>Date: </b>
                  {appointment.appointment_date}
                </span>
                <span>
                  <BiTime className="app-icons" />
                  <b>Time: </b>
                  {format(new Date(appointment.start_time), 'p')}
                  {' '}
                  -
                  {' '}
                  {format(new Date(appointment.end_time), 'p')}
                </span>
                <span>
                  <GrStatusCriticalSmall className="app-icons" />
                  <b>Speciality: </b>
                  {appointment.doctor_specialty}
                </span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AppointmentCards;
