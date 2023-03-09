import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDocData } from '../redux/doctors/doctorSlice';
import '../styles/Home.css';
import Spinner from './Spinner';

const Homepage = () => {
  const dispatch = useDispatch();
  const { doctors, status } = useSelector((state) => state.doctors);

  useEffect(() => {
    dispatch(fetchDocData());
  }, [dispatch]);

  return (
    <section className="mt-4 main-container">
      <div>
        <h1 className="text-center">Oncall Doctors</h1>
        <p className="text-center sub-header">Please choose a specialist</p>
      </div>

      <p className="text-center dotted mb-5">................</p>

      <main className="doctors-container">
        {status === null || status === 'pending' ? (
          <div className="spinner-here-appointment">
            <Spinner />
          </div>
        ) : (
          doctors.map((doctor) => {
            if (doctor.active === true) {
              return (
                <div className="mb-5" key={doctor.id}>
                  <div className="home-img-container">
                    <img src={doctor.photo} alt="doctor" />
                  </div>
                  <h3 className="text-center mt-3">{doctor.name}</h3>

                  <div className="bottom-container text-center">
                    <span className="dotted">................</span>
                    <p className="btm-text">{doctor.bio}</p>
                    <Link
                      to={`details/${doctor.id}`}
                      type="button"
                      className="btn btn-success-cus"
                    >
                      {' '}
                      View more
                    </Link>
                  </div>
                </div>
              );
            }
            return null;
          })
        )}
      </main>
    </section>
  );
};

export default Homepage;
