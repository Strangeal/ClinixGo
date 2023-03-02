import { InputSwitch } from 'primereact/inputswitch';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDocData } from '../redux/doctors/doctorSlice';
import { updateDocStatus } from '../redux/doctors/updateDocStatusSlice';
import '../styles/doctors.css';

const Doctors = () => {
  const dispatch = useDispatch();
  const { doctors } = useSelector((state) => state.doctors);

  const updateStatus = (doctor) => {
    if (doctor.active) {
      const data = {
        id: doctor.id,
        doctor: {
          active: false,
        },
      };
      dispatch(updateDocStatus(data));
      dispatch(fetchDocData());
    } else {
      const data = {
        id: doctor.id,
        doctor: {
          active: true,
        },
      };
      dispatch(updateDocStatus(data));
      dispatch(fetchDocData());
    }
  };

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
                  {doctor.active ? <span>active</span> : <span>removed</span>}
                </td>

                <td className="">
                  <div className="flex justify-content-center">
                    <InputSwitch
                      checked={doctor.active}
                      onChange={() => updateStatus(doctor)}
                    />
                  </div>
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
