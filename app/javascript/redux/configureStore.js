import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import appointmentReducer from './appointments/appointmentSlice';
import createDocSlice from './doctors/createDocSlice';
import doctorIdReducer from './doctors/doctorIdSlice';
import doctorReducer from './doctors/doctorSlice';
import updateDoctorStatusSlice from './doctors/updateDocStatusSlice';

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    doctorsId: doctorIdReducer,
    appointments: appointmentReducer,
    newDoctor: createDocSlice,
    updateDoctorStatusSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
