import React from "react";
import "../styles/NotFound.css";

const NotFound = () => (
  <section className="p-2 vh-100 d-flex flex-column align-items-center gap-3">
    <div className="img-not-found text-center">
      <img
        src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677239328/assets/not_found_u1yuyb.svg"
        alt="Not Found"
      />
    </div>
    <div className="oops-container my-3 text-center">
      <h1 className="fw-bold">Oops!!</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas autem
        harum.
      </p>
      <button type="button" className="btn">
        Back
      </button>
    </div>
  </section>
);

export default NotFound;
