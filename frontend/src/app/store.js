import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../features/flightComponents/flightSlice";
import flightBookingReducer from "../features/flightBookingComponents/flightBookingSlice";
import { authReducer } from "../features/auth/auth.reducer";
import hotelReducer from "../HotelsSecondPage/hotelSlice";
import hotelBookingReducer from "../features/Hotel/hotelBooking";

export const store = configureStore({
  reducer: {
    flight: flightReducer,
    flightBooking: flightBookingReducer,
    hotelBooking: hotelBookingReducer,
    auth: authReducer,
    hotel: hotelReducer,
    hotelBooking: hotelBookingReducer,
  },
});

console.log(store.getState());
