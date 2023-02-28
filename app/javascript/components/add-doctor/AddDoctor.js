/* eslint-disable import/no-extraneous-dependencies */
import { Form, Formik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react';
import * as Yup from 'yup';
import '../../styles/AddDoc.css';
const initialValues = {
  name: '',
  email: '',
  bio: '',
  photo: '',
  available_days: '',
  specialities: '',
  hospital: '',
  start_time: '',
  end_time: '',
  phone: '',
  reviews: 0,
  ratings: 0,
  patients: 0,
};
const AddDoctor = () => {
    <section
      id="add-doctor"
      className="py-5 vh-lg-100 d-flex flex-column justify-content-center"
    >
      <h1 className="mt-1 d-none d-lg-block text-center mt-lg-5">
        Add a Doctor
      </h1>
    </section>
  );
};

export default AddDoctor;
