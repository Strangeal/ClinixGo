import React from "react";
import { BsFileEarmarkPerson, BsFillCalendarDateFill, BsFillPersonFill} from "react-icons/bs";
import { BiTime } from "react-icons/bi";
import { GrStatusCriticalSmall } from "react-icons/gr";
import '../styles/AppointmentCards.css';


const AppointmentCards = () => {
  return (
    <section className="container text-center appointments-section">
      <div>
      <h1 className="appointment-header">Appointments</h1>
        <h5><BsFillPersonFill className="app-icons" />Patient: Amir Khan</h5>
      </div>
<div className="cards">
    <div className="container background-of-card">
      <img src="https://res.cloudinary.com/db3ckadxp/image/upload/v1677239541/doc2_nv5ug5.png" alt="Avatar" className="card-image" />
      <div className="content">
      <span><BsFileEarmarkPerson className="app-icons"/><b>Doctor: </b>Cincinatti Pagne</span>
      <span><BsFillCalendarDateFill className="app-icons"/><b>Date: </b>10th May 2023</span>
      <span><BiTime className="app-icons"/><b>Time: </b>11:54am - 12:54pm</span>
        <span><GrStatusCriticalSmall className="app-icons"/><b>Status: </b>pending</span>
        </div>
      </div>

      <div className="container background-of-card">
      <img src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677227659/assets/rvzpkwlpfiwtntpdxezk.png" alt="Avatar" className="card-image" />
      <div className="content">
      <span><BsFileEarmarkPerson className="app-icons"/><b>Doctor: </b>Cincinatti Pagne</span>
      <span><BsFillCalendarDateFill className="app-icons"/><b>Date: </b>10th May 2023</span>
      <span><BiTime className="app-icons"/><b>Time: </b>11:54am - 12:54pm</span>
        <span><GrStatusCriticalSmall className="app-icons"/><b>Status: </b>pending</span>
        </div>
      </div>

      <div className="container background-of-card">
      <img src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677331291/assets/doc_2_pbbvzx.png" alt="Avatar" className="card-image" />
      <div className="content">
      <span><BsFileEarmarkPerson className="app-icons"/><b>Doctor: </b>Cincinatti Pagne</span>
      <span><BsFillCalendarDateFill className="app-icons"/><b>Date: </b>10th May 2023</span>
      <span><BiTime className="app-icons"/><b>Time: </b>11:54am - 12:54pm</span>
        <span><GrStatusCriticalSmall className="app-icons"/><b>Status: </b>pending</span>
        </div>
      </div>
      </div>

      <div className="container background-of-card">
      <img src="https://res.cloudinary.com/db3ckadxp/image/upload/v1677239541/doc2_nv5ug5.png" alt="Avatar" className="card-image" />
      <div className="content">
      <span><BsFileEarmarkPerson className="app-icons"/><b>Doctor: </b>Cincinatti Pagne</span>
      <span><BsFillCalendarDateFill className="app-icons"/><b>Date: </b>10th May 2023</span>
      <span><BiTime className="app-icons"/><b>Time: </b>11:54am - 12:54pm</span>
        <span><GrStatusCriticalSmall className="app-icons"/><b>Status: </b>pending</span>
        </div>
      </div>

      <div className="container background-of-card">
      <img src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677227659/assets/rvzpkwlpfiwtntpdxezk.png" alt="Avatar" className="card-image" />
      <div className="content">
      <span><BsFileEarmarkPerson className="app-icons"/><b>Doctor: </b>Cincinatti Pagne</span>
      <span><BsFillCalendarDateFill className="app-icons"/><b>Date: </b>10th May 2023</span>
      <span><BiTime className="app-icons"/><b>Time: </b>11:54am - 12:54pm</span>
        <span><GrStatusCriticalSmall className="app-icons"/><b>Status: </b>pending</span>
        </div>
      </div>

      <div className="container background-of-card">
      <img src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677331291/assets/doc_2_pbbvzx.png" alt="Avatar" className="card-image" />
      <div className="content">
      <span><BsFileEarmarkPerson className="app-icons"/><b>Doctor: </b>Cincinatti Pagne</span>
      <span><BsFillCalendarDateFill className="app-icons"/><b>Date: </b>10th May 2023</span>
      <span><BiTime className="app-icons"/><b>Time: </b>11:54am - 12:54pm</span>
        <span><GrStatusCriticalSmall className="app-icons"/><b>Status: </b>pending</span>
        </div>
      </div>
      </section>
  );
};


export default AppointmentCards;