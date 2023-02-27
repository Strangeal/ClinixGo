import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDocData } from "../redux/doctors/doctorSlice";
import "../styles/Home.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const doctorsList = useSelector((state) => state.doctors.doctors);

  useEffect(() => {
    dispatch(fetchDocData());
   }, [dispatch]);

  return (
    <section className="container mt-4">
      <h1 className="text-center">Oncall Doctors</h1>
      <p className="text-center sub-header">Please choose a specialist</p>

      <main className="doctors-container">
        {doctorsList.map((doctor) => (
        <div className="mb-5" key={doctor.id}>
          <div className="container">
            <span className="dot" />
            <img
              src={doctor.photo}
              className="mx-auto d-block img-fluid"
              alt="doctor"
            />
              <h3 className="text-center mt-3">{doctor.name }</h3>
          </div>

          <div className="bottom-container text-center">
            <span className="dotted">................</span>
            <p className="btm-text">
              {doctor.bio}
            </p>
            <Link to={`details/${doctor.id}`} type="button" className="btn btn-outline-secondary"> View more</Link>
          </div>
          </div>
        ))}
      </main>
    </section>
  );
};

export default Homepage;
