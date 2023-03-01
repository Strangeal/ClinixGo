/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { format } from 'date-fns';
import { Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { createDoc } from '../../redux/doctors/createDocSlice';
import '../../styles/AddDoc.css';
import Availability from './Availability';
import PersonalInfo from './PersonalInfo';
import Reviews from './Reviews';

const initialValues = {
  name: '',
  email: '',
  phone: '',
  photo: '',
  bio: '',
  available_days: '',
  specialities: '',
  hospital: '',
  start_time: '',
  end_time: '',
  reviews: '',
  ratings: '',
  patients: '',
  experience: '',
};

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'must be at least 3 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Must be a valid email address')
    .required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  photo: Yup.string().required('Photo is required'),
  bio: Yup.string()
    .min(5, 'must be at least 3 characters')
    .required('Bio is required'),
  specialities: Yup.string().required('Specialities is required'),
  hospital: Yup.string().required('Hospital name is required'),
  start_time: Yup.string().required('Start time is required'),
  end_time: Yup.string().required('End time is required'),
  reviews: Yup.number().required('Reviews is required'),
  ratings: Yup.number().required('Ratings is required'),
  patients: Yup.number().required('Patients is required'),
  experience: Yup.number().required('Years of experience is required'),
});

const AddDoctor = () => {
  const [step, setStep] = useState(0);
  const [days, setDays] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    values.available_days = days;

    const startTime = format(values.start_time, 'p');
    const endTime = format(values.end_time, 'p');

    const doctor = {
      name: values.name,
      email: values.email,
      bio: values.bio,
      photo: values.photo,
      available_days: values.available_days,
      specialities: values.specialities,
      hospital: values.hospital,
      start_time: startTime,
      end_time: endTime,
      phone: values.phone,
      reviews: values.reviews,
      rating: values.ratings,
      patients: values.patients,
      experience: values.experience,
    };

    console.log(doctor);

    dispatch(createDoc(doctor));
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
