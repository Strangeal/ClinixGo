import { ErrorMessage, Field } from 'formik';
import React from 'react';

const Reviews = ({ prevStep }) => (
  <section id="reviews" className="mt-3">
    <p className="text-decoration-underline">Reviews</p>

    <div className="mt-2 mb-3">
      <label htmlFor="experience" className="form-label">
        Years of Experience
        <Field name="experience">
          {({ field, meta }) => (
            <div>
              <input
                id="experience"
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
      </label>
    </div>

    <div className="mt-2 mb-3">
      <label htmlFor="ratings" className="form-label">
        Ratings
        <Field name="ratings">
          {({ field, meta }) => (
            <div>
              <input
                id="ratings"
                type="number"
                className={`form-control ${
                  meta.touched && meta.error ? 'is-invalid' : ''
                }`}
                {...field}
              />
              <div className="text-danger">
                <ErrorMessage name="ratings" />
              </div>
            </div>
          )}
        </Field>
      </label>
    </div>

    <div className="mt-2 mb-3">
      <label htmlFor="reviews" className="form-label">
        Reviews
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
      </label>
    </div>

    <div className="mt-2 mb-3">
      <label htmlFor="patients" className="form-label">
        Number of Patients
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

export default Reviews;
