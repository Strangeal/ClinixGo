import React from "react";
import "../styles/Home.css";

const Homepage = () => (
  <section className="container mt-4">
    <h1 className="text-center">Oncall Doctors</h1>
    <p className="text-center sub-header">Please choose a specialist</p>

    <main className="doctors-container">
      <div className="mb-5">
        <div className="container">
          <span className="dot" />
          <img
            src="https://res.cloudinary.com/db3ckadxp/image/upload/v1677239506/doc1_rzintp.png"
            className="mx-auto d-block img-fluid"
            alt="doctor"
          />
          <h3 className="text-center mt-3">Hannah Dosie</h3>
        </div>

        <div className="bottom-container text-center">
          <span className="dotted">................</span>
          <p className="btm-text">
            Lorem ipsum text asaj abs ye byeabde eybddbye aey sixe nqoqnud
            qoqnsqj Q;WDwqun
          </p>
          <button type="button" className="btn btn-outline-secondary">
            View more
          </button>
        </div>
      </div>

      <div className="mb-5">
        <div className="container">
          <span className="dot" />
          <img
            src="https://res.cloudinary.com/db3ckadxp/image/upload/v1677239506/doc1_rzintp.png"
            className="mx-auto d-block img-fluid"
            alt="doctor"
          />
          <h3 className="text-center mt-3">Sam Hassan</h3>
        </div>

        <div className="bottom-container text-center">
          <span className="dotted">................</span>
          <p className="btm-text">
            Lorem ipsum text asaj abs ye byeabde eybddbye aey sixe nqoqnud
            qoqnsqj Q;WDwqun
          </p>
          <button type="button" className="btn btn-outline-secondary">
            View more
          </button>
        </div>
      </div>

      <div className="mb-5">
        <div className="container">
          <span className="dot" />
          <img
            src="https://res.cloudinary.com/db3ckadxp/image/upload/v1677239506/doc1_rzintp.png"
            className="mx-auto d-block img-fluid"
            alt="doctor"
          />
          <h3 className="text-center mt-3">Mille Paul</h3>
        </div>

        <div className="bottom-container text-center">
          <span className="dotted">................</span>
          <p className="btm-text">
            Lorem ipsum text asaj abs ye byeabde eybddbye aey sixe nqoqnud
            qoqnsqj Q;WDwqun
          </p>
          <button type="button" className="btn btn-outline-secondary">
            View more
          </button>
        </div>
      </div>
    </main>
  </section>
);

export default Homepage;
