import { ErrorMessage, Field } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

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
              id="experience"
              type="number"
              className={`form-control ${
                meta.touched && meta.error ? 'is-invalid' : ''
              }`}
              value={field.value}
              onChange={field.onChange}
            />
            <div className="text-danger">
              <ErrorMessage name="experience" />
            </div>
          )}
        </Field>
      </label>
    </div>

    <div className="mt-2 mb-3">
      <label htmlFor="ratings" className="form-label">
        Ratings
      </label>
      <Field name="ratings">
        {({ field, meta }) => (
          <div>
            <input
              id="ratings"
              type="number"
              className={`form-control ${
                meta.touched && meta.error ? 'is-invalid' : ''
              }`}
              value={field.value}
              onChange={field.onChange}
            />
            <div className="text-danger">
              <ErrorMessage name="ratings" />
            </div>
          )}
        </Field>
      </label>
    </div>

    <div className="mt-2 mb-3">
      <label htmlFor="reviews" className="form-label">
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
              value={field.value}
              onChange={field.onChange}
            />
            <div className="text-danger">
              <ErrorMessage name="reviews" />
            </div>
          )}
        </Field>
      </label>
    </div>

    <div className="mt-2 mb-3">
      <label htmlFor="patients" className="form-label">
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
              value={field.value}
              onChange={field.onChange}
            />
            <div className="text-danger">
              <ErrorMessage name="patients" />
            </div>
          )}
        </Field>
      </label>
    </div>

    <div className="stepper d-flex justify-content-between">
      <button
        type="button"
        onClick={prevStep}
        className="btn btn-outline-secondary"
      >
        Back
      </button>
      <button type="submit" className="btn btn-success-cus">
        Create Doctor
      </button>
    </div>
  </section>
);

Reviews.propTypes = {
  prevStep: PropTypes.func.isRequired,
};

export default Reviews;
