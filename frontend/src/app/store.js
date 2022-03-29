import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../features/flightComponents/flightSlice";
import flightBookingReducer from "../features/flightBookingComponents/flightBookingSlice";
export const store = configureStore({
  reducer: {
    flight: flightReducer,
    flightBooking: flightBookingReducer,
  },
});

console.log(store.getState());
