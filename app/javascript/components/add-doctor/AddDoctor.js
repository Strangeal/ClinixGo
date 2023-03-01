/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import '../../styles/AddDoc.css';
import Availability from './Availability';
import PersonalInfo from './PersonalInfo';
import Reviews from './Reviews';

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
  end_time: Yup.string().required('End time is required'),
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  reviews: Yup.number().required('Reviews is required'),
  rating: Yup.number().required('Ratings is required'),
  patients: Yup.number().required('Patients is required'),
  experience: Yup.number().required('Years of experience is required'),
});

const AddDoctor = () => {
  const [step, setStep] = useState(0);
  const [days, setDays] = useState('');

  const onSubmit = (values) => {
    values.available_days = days;
  };

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
        return (
          <Availability
            prevStep={prevStep}
            nextStep={nextStep}
            setDays={setDays}
          />
        );
      case 2:
        return <Reviews prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <section
      id="add-doctor"
      className="py-5 py-lg-3 vh-lg-100 d-flex flex-column justify-content-center"
    >
      <h1 className="mt-1 d-none d-lg-block text-center mb-lg-5">
        Add a Doctor
      </h1>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center justify-content-lg-evenly w-100">
        <div className="add-doc-img">
          <img
            src="https://res.cloudinary.com/dskl0qde4/image/upload/v1677582575/undraw_doctors_p6aq_tiqpge.svg"
            alt="Doctor SVG"
            className="img-fluid"
          />
        </div>
        <h1 className="mt-1 d-lg-none">Add a Doctor</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {() => <Form>{renderSwitch()}</Form>}
        </Formik>
      </div>
    </section>
  );
};

export default AddDoctor;
