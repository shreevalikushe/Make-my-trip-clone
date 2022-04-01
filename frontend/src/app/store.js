import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../features/flightComponents/flightSlice";
import flightBookingReducer from "../features/flightBookingComponents/flightBookingSlice";
import hotelBookingReducer from "../features/HotelBookings/hotelBookingSlice";
import { authReducer } from "../features/auth/auth.reducer"


export const store = configureStore({
  reducer: {
    flight: flightReducer,
    flightBooking: flightBookingReducer,
    hotelBooking: hotelBookingReducer,
    auth: authReducer,
  },
});

console.log(store.getState());
