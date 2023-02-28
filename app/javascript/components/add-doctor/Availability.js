/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import { ErrorMessage, Field } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';

const Availability = ({ prevStep, nextStep }) => {
  const [checked, setChecked] = useState([]);
  const [days, setDays] = useState('');
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
  }, [checked]);

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

  console.log(days);

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
        <label htmlFor="available_days" className="form-label">
          Select Available Days
          <div className="form-check">
            {availableDays.map((day, index) => (
              <div key={index}>
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
        </label>
      </div>

      <div>{days}</div>

      <div className="mt-2 mb-3">
        <Field name="available_days">
          {({ field, meta }) => {
            c
          }}
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
          className="btn btn-outline-success"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default Availability;
