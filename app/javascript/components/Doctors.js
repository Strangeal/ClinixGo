import React, { useEffect } from 'react';
import { TbTrashOff } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDocData } from '../redux/doctors/doctorSlice';
import '../styles/doctors.css';

const Doctors = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctors);
  console.log(doctors);

  useEffect(() => {
    dispatch(fetchDocData());
  }, [dispatch]);

  return (
    <section className="container-fliud doc-section">
      <h1>Doctors</h1>
      <div className="doc_container border">
        <table className="table">
          <thead className="container">
            <tr className="">
              <th scope="col">Basic Info</th>
              <th scope="col" className="doc-date">
                Specialities
              </th>
              <th scope="col" className="doc-status">
                Status
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor.id}>
                <td className="doc-profile">
                  <img
                    className="doc-img img-fluid bg-secondary"
                    src={doctor.photo}
                    alt=""
                  />
                  <div className="doc-content">
                    <p className="name">{doctor.name}</p>
                    <p className="contact text-muted">{doctor.email}</p>
                  </div>
                </td>
                <td className="doc-date-data">{doctor.specialities}</td>
                <td className="doc-status-data">
                  <span>{doctor.status}</span>
                </td>

                <td className="">
                  <button
                    type="button"
                    className="doc-btn border-0 bg-transparent"
                  >
                    <TbTrashOff className="doc-trash text-center text-danger" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="doc_profile" />
      </div>
    </section>
  );
};

export default Doctors;
