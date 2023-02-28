/* eslint-disable import/no-extraneous-dependencies */
import { Form, Formik } from 'formik';
import moment from 'moment';
import React, { useState } from 'react';
import * as Yup from 'yup';
import '../../styles/AddDoc.css';
import Availability from './Availability';
import PersonalInfo from './PersonalInfo';

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

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'must be at least 3 characters')
    .required('Name is required'),
  bio: Yup.string()
    .min(5, 'must be at least 3 characters')
    .required('Bio is required'),
  photo: Yup.string().required('Photo is required'),
  available_days: Yup.string().required('Available days is required'),
  specialities: Yup.string().required('Specialities is required'),
  hospital: Yup.string().required('Hospital name is required'),
  start_time: Yup.string().required('Start time is required'),
  end_time: Yup.string()
    .required('End time is required')
    .test('is-greater', 'End Time must be greater', (value) => {
      // eslint-disable-next-line camelcase
      const { start_time } = this.parent;
      return moment(value, 'HH:mm').isSameOrAfter(moment(start_time, 'HH:mm'));
    }),
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  reviews: Yup.number().required('Reviews is required'),
  ratings: Yup.number().required('Ratings is required'),
  patients: Yup.number().required('Patients is required'),
});

const AddDoctor = () => {
  const [step, setStep] = useState(1);
  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const renderSwitch = () => {
    switch (step) {
      case 0:
        return <PersonalInfo nextStep={nextStep} />;
      case 1:
        return <Availability prevStep={prevStep} nextStep={nextStep} />;
      default:
        return null;
    }
  };

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
