/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { AiOutlineAreaChart } from 'react-icons/ai';
import { FaCommentDots, FaHospitalSymbol, FaUsers } from 'react-icons/fa';
import { GiRoundStar } from 'react-icons/gi';
import '../styles/Details.css';

const Details = () => (
  <section id="details">
    <div className="container mt-5">
      <div className="row gy-5 align-items-sm-center">
        <div className="col-sm-6 order-last order-sm-first d-none d-sm-block">
          <div className="img-container position-relative slide-in-fwd-left">
            <div className="blob">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#96BF01"
                  d="M28.6,-42.5C36,-34,40.3,-24.2,50.7,-11.8C61.1,0.6,77.8,15.6,77.9,28.4C77.9,41.1,61.4,51.4,45.7,52.5C30,53.6,15,45.3,2.3,42.1C-10.4,39,-20.7,40.9,-31.2,38.1C-41.6,35.3,-52.2,27.9,-60.6,16.3C-68.9,4.8,-75,-10.8,-70,-21.6C-64.9,-32.4,-48.6,-38.5,-35.1,-45C-21.6,-51.5,-10.8,-58.4,-0.1,-58.3C10.6,-58.1,21.2,-51,28.6,-42.5Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>
            <div className="position-absolute top-0 w-100 text-center">
              <img
                src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677227659/assets/rvzpkwlpfiwtntpdxezk.png"
                alt="Doctor"
                className="doc-detail-img img-fluid img-responsive"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-6 order-first order-sm-last">
          <div className="container fade-in-fwd">
            <div className="doc-header">
              <div className="doc-card shadow-sm d-flex align-items-center gap-2">
                <div className="image-sm d-block d-sm-none">
                  <img
                    src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677227659/assets/rvzpkwlpfiwtntpdxezk.png"
                    alt="Doctor"
                    className="img-fluid img-responsive"
                  />
                </div>
                <div>
                  <h2>
                    Jenna
                    <span className="fw-light"> Miles</span>
                  </h2>
                  <p className="doc-title text-uppercase">
                    Professional Dentist
                  </p>
                  <p className="text-muted d-flex align-items-center gap-1">
                    <span>
                      <FaHospitalSymbol />
                    </span>
                    <span>St. Bonnaventure Hospital</span>
                  </p>
                </div>
              </div>
              <div className="more-details d-flex gap-3 mt-2 mt-sm-0 justify-content-evenly justify-content-sm-start">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="icon-div">
                    <FaUsers className="line-chart" />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="text-center fw-bold">500+</h6>
                    <span>patients</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="icon-div">
                    <AiOutlineAreaChart className="line-chart" />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="text-center fw-bold">7+</h6>
                    <span>years exper..</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="icon-div">
                    <GiRoundStar className="line-chart" />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="text-center fw-bold">4.8</h6>
                    <span>rating</span>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <div className="icon-div">
                    <FaCommentDots className="line-chart" />
                  </div>
                  <div className="d-flex flex-column justify-content-center">
                    <h6 className="text-center fw-bold">123</h6>
                    <span>reviews</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about mt-4">
              <h4 className="mb-2">About Me</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Pariatur repellendus cumque vero excepturi. Quis quibusdam,
                expedita sunt modi eaque enim possimus totam, rerum perferendis
                saepe nobis.
              </p>
            </div>
            <div className="mt-4">
              <h4 className="mb-2">Working Time</h4>
              <p>Monday - Friday, 08:00 AM - 09:00 PM</p>
            </div>
            <div className="doc-details-actions mt-4 mt-sm-2">
              <button
                type="button"
                className="btn btn-success d-block w-100 rounded-pill"
              >
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Details;
