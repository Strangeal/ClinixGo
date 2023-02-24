import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import appointmentReducer from './appointments/appointmentSlice';
import doctorIdReducer from './doctors/doctorIdSlice';
import doctorReducer from './doctors/doctorSlice';

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    doctorsId: doctorIdReducer,
    appointments: appointmentReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
