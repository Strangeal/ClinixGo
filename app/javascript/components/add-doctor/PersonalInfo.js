/* eslint-disable import/no-extraneous-dependencies */
import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

const PersonalInfo = ({ nextStep }) => (
  <section className="mt-3">
    <p className="text-decoration-underline">Personal Information</p>
    <div className="mt-2 mb-3">
      <label htmlFor="name" className="form-label w-100">
        Name
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
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label w-100">
        Email
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
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="photo" className="form-label w-100">
        Doctor&apos;s Image
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
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="phone" className="form-label w-100">
        Phone Number
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
      </label>
    </div>
    <div className="mb-3">
      <label htmlFor="bio" className="form-label w-100">
        Tell us about the doctor
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
      </label>
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
