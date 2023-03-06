import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import appointmentReducer from "./appointments/appointmentSlice";
import createDocSlice from "./doctors/createDocSlice";
import doctorIdReducer from "./doctors/doctorIdSlice";
import doctorReducer from "./doctors/doctorSlice";
import userReducer from "./user/userSlice";
import updateDoctorStatusSlice from "./doctors/updateDocStatusSlice";
import bookAppointmentReducer from "./appointments/bookAppointmentSlice";

const store = configureStore({
  reducer: {
    doctors: doctorReducer,
    doctorsId: doctorIdReducer,
    appointments: appointmentReducer,
    bookAppointment: bookAppointmentReducer,
    user: userReducer,
    newDoctor: createDocSlice,
    updateDoctorStatusSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
