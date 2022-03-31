import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../features/flightComponents/flightSlice";
import flightBookingReducer from "../features/flightBookingComponents/flightBookingSlice";
import { authReducer } from "../features/auth/auth.reducer"


export const store = configureStore({
  reducer: {
    flight: flightReducer,
    flightBooking: flightBookingReducer,
    auth: authReducer,
  },
});

console.log(store.getState());
