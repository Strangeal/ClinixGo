/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from 'formik';
import React from 'react';

const Reviews = ({ prevStep }) => (
  <section id="reviews" className="mt-3">
    <p className="text-decoration-underline">Reviews</p>

    <div className="mt-2 mb-3">
      <label htmlFor="experience" className="form-label">
        Years of Experience
      </label>
      <Field name="experience">
        {({ field, meta }) => (
          <div>
            <input
              id="rating"
              type="number"
              className={`form-control ${
                meta.touched && meta.error ? 'is-invalid' : ''
              }`}
              {...field}
            />
            <div className="text-danger">
              <ErrorMessage name="experience" />
            </div>
          </div>
        )}
      </Field>
    </div>

    <div className="mt-2 mb-3">
      <label htmlFor="hospital" className="form-label">
        Ratings
      </label>
      <Field name="rating">
        {({ field, meta }) => (
          <div>
            <input
              id="rating"
              type="number"
              className={`form-control ${
                meta.touched && meta.error ? 'is-invalid' : ''
              }`}
              {...field}
            />
            <div className="text-danger">
              <ErrorMessage name="rating" />
            </div>
          </div>
        )}
      </Field>
    </div>

    <div className="mt-2 mb-3">
      <label htmlFor="hospital" className="form-label">
        Reviews
      </label>
      <Field name="reviews">
        {({ field, meta }) => (
          <div>
            <input
              id="reviews"
              type="number"
              className={`form-control ${
                meta.touched && meta.error ? 'is-invalid' : ''
              }`}
              {...field}
            />
            <div className="text-danger">
              <ErrorMessage name="reviews" />
            </div>
          </div>
        )}
      </Field>
    </div>

    <div className="mt-2 mb-3">
      <label htmlFor="hospital" className="form-label">
        Number of Patients
      </label>
      <Field name="patients">
        {({ field, meta }) => (
          <div>
            <input
              id="patients"
              type="number"
              className={`form-control ${
                meta.touched && meta.error ? 'is-invalid' : ''
              }`}
              {...field}
            />
            <div className="text-danger">
              <ErrorMessage name="patients" />
            </div>
          </div>
        )}
      </Field>
    </div>

    <div className="stepper d-flex justify-content-between">
      <button
        type="button"
        onClick={prevStep}
        className="btn btn-outline-secondary"
      >
        Back
      </button>
      <button type="submit" className="btn btn-outline-success">
        Create Doctor
      </button>
    </div>
  </section>
);

export default Reviews;
