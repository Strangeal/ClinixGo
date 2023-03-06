/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from 'formik';
import { Calendar } from 'primereact/calendar';
import React, { useCallback, useEffect, useState } from 'react';

const Availability = ({ prevStep, nextStep, setDays }) => {
  const [checked, setChecked] = useState([]);
  const availableDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const selectedDays = useCallback(() => {
    const checkedItems = checked.length
      ? checked.reduce((total, item) => `${total}, ${item}`)
      : '';
    setDays(checkedItems);
  }, [checked, setDays]);

  const handleCheck = (e) => {
    const updatedList = [...checked];
    if (e.target.checked) {
      updatedList.push(e.target.value);
    } else {
      updatedList.splice(updatedList.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
  };

  useEffect(() => {
    selectedDays();
  }, [checked, selectedDays]);

  return (
    <section className="mt-3">
      <p className="text-decoration-underline">Availability</p>

      <div className="mt-2 mb-3">
        <label htmlFor="hospital" className="form-label">
          Hospital
        </label>
        <Field name="hospital">
          {({ field, meta }) => (
            <div>
              <input
                id="hospital"
                type="text"
                className={`form-control ${
                  meta.touched && meta.error ? 'is-invalid' : ''
                }`}
                {...field}
              />
              <div className="text-danger">
                <ErrorMessage name="hospital" />
              </div>
            </div>
          )}
        </Field>
      </div>

      <div className="mt-2 mb-3">
        <label htmlFor="specialities" className="form-label">
          Specialty
        </label>
        <Field name="specialities">
          {({ field, meta }) => (
            <div>
              <input
                id="specialities"
                type="text"
                className={`form-control ${
                  meta.touched && meta.error ? 'is-invalid' : ''
                }`}
                {...field}
              />
              <div className="text-danger">
                <ErrorMessage name="specialities" />
              </div>
            </div>
          )}
        </Field>
      </div>

      <div className="mt-2 mb-3">
        <p className="mb-1">Select Available Days</p>
        <div className="container-fluid">
          <div className="form-check d-flex row">
            {availableDays.map((day, index) => (
              <div key={index} className="col-6">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={day}
                  onChange={handleCheck}
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  {day}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 mb-3">
        <Field name="start_time">
          {({ field, meta }) => (
            <div>
              <span className="p-float-label">
                <Calendar
                  inputId="start_time"
                  {...field}
                  hourFormat="12"
                  timeOnly
                  className={`${
                    meta.touched && meta.error ? 'is-invalid' : ''
                  }`}
                />
                <label htmlFor="start_time">Start Time</label>
              </span>
              <div className="text-danger">
                <ErrorMessage name="start_time" />
              </div>
            </div>
          )}
        </Field>
      </div>

      <div className="mt-4 mb-3">
        <Field name="end_time">
          {({ field, meta }) => (
            <div>
              <span className="p-float-label">
                <Calendar
                  inputId="end_time"
                  {...field}
                  hourFormat="12"
                  timeOnly
                  className={`${
                    meta.touched && meta.error ? 'is-invalid' : ''
                  }`}
                />
                <label htmlFor="start_time">End Time</label>
              </span>
              <div className="text-danger">
                <ErrorMessage name="end_time" />
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
        <button
          type="button"
          onClick={nextStep}
          className="btn btn-success-cus"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Availability;
