import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAppointData } from "../redux/appointments/appointmentSlice";
import { BsFileEarmarkPerson, BsFillCalendarDateFill, BsFillPersonFill} from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { GrStatusCriticalSmall } from "react-icons/gr";
import '../styles/AppointmentCards.css';
import { format } from "date-fns";


const AppointmentCards = () => {

  const dispatch = useDispatch();
  const { appointments, status } = useSelector((state) => state.appointments);
  

  useEffect(() => { dispatch(fetchAppointData()); }, [dispatch]);

  if (status === "pending") { return <div class="spinner"></div>; }

  if (status === "rejected") { return <h1>Something went wrong...</h1>; }

  if (status === "fulfilled") { 
    return (
      <section className="container text-center appointments-section">
        <div className="header-section">
        <h1 className="appointment-header">Appointments</h1>
          <h5 className="patient"><BsFillPersonFill className="app-icons" />Patient: Amir Khan</h5>
        </div>
  <div className="cards">
          {appointments.map((appointment) => ( 
      <div className="container background-of-card">
      <img src={appointment.doctor_photo} alt="Avatar" className="card-image" />
      <div className="content">
                <span><BsFileEarmarkPerson className="app-icons" /><b>Doctor: </b>{ appointment.doctor_name }</span>
                <span><BsFillCalendarDateFill className="app-icons" /><b>Date: </b>{ appointment.appointment_date }</span>
                <span><BiTime className="app-icons" /><b>Time: </b>{format(new Date(appointment.start_time), "p")} - {format(new Date(appointment.end_time), "p")}</span>
                <span><GrStatusCriticalSmall className="app-icons" /><b>Speciality: </b>{ appointment.doctor_specialty }</span>
        </div>
      </div>
          ))}
        </div>
        </section>
    );
  }
};


export default AppointmentCards;