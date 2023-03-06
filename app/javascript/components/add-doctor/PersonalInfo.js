import { ErrorMessage, Field } from 'formik';
import React from 'react';
import PropTypes from 'prop-types';

const PersonalInfo = ({ nextStep }) => (
  <section className="mt-3">
    <p className="text-decoration-underline">Personal Information</p>
    <div className="mt-2 mb-3">
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <Field name="name">
        {({ field, meta, form }) => (
          <div>
            <input
              id="name"
              type="text"
              className={`form-control ${
                meta.touched && form.errors.name ? 'is-invalid' : ''
              }`}
              value={field.value}
              onChange={field.onChange}
            />
            <div className="text-danger">
              <ErrorMessage name="name" />
            </div>
          </div>
        )}
      </Field>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <Field type="email" name="email">
        {({ field, meta, form }) => (
          <div>
            <input
              id="email"
              className={`form-control ${
                meta.touched && form.errors.email ? 'is-invalid' : ''
              }`}
              value={field.value}
              onChange={field.onChange}
            />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>
        )}
      </Field>
    </div>
    <div className="mb-3">
      <label htmlFor="photo" className="form-label">
        Doctor&apos;s Image
      </label>
      <Field name="photo">
        {({ field, meta, form }) => (
          <div>
            <input
              id="photo"
              className={`form-control ${
                meta.touched && form.errors.photo ? 'is-invalid' : ''
              }`}
              value={field.value}
              onChange={field.onChange}
              placeholder="Input URL to image"
            />
            <div className="text-danger">
              <ErrorMessage name="photo" />
            </div>
          </div>
        )}
      </Field>
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label">
        Phone Number
      </label>
      <Field name="phone">
        {({ field, meta, form }) => (
          <div>
            <input
              id="phone"
              className={`form-control ${
                meta.touched && form.errors.phone ? 'is-invalid' : ''
              }`}
              value={field.value}
              onChange={field.onChange}
            />
            <div className="text-danger">
              <ErrorMessage name="phone" />
            </div>
          </div>
        )}
      </Field>
    </div>
    <div className="mb-3">
      <label htmlFor="bio" className="form-label">
        Tell us about the doctor
      </label>
      <Field name="bio">
        {({ field, meta, form }) => (
          <div>
            <textarea
              id="bio"
              className={`form-control ${
                meta.touched && form.errors.bio ? 'is-invalid' : ''
              }`}
              value={field.value}
              onChange={field.onChange}
            />
            <div className="text-danger">
              <ErrorMessage name="bio" />
            </div>
          </div>
        )}
      </Field>
    </div>
    <div className="text-end">
      <button
        type="button"
        onClick={nextStep}
        className="btn btn-success-cus btn-sm px-4"
      >
        Next
      </button>
    </div>
  </section>
);

PersonalInfo.propTypes = {
  nextStep: PropTypes.func.isRequired,
};

export default PersonalInfo;
