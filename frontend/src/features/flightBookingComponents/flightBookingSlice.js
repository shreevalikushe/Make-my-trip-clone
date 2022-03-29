import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightBooking: {},
  loading: false,
  error: false,
  form: [],
};

export const flightBookingSlice = createSlice({
  name: "flightBooking",
  initialState,

  reducers: {
    flightBookingLoading: (state) => {
      state.loading = true;
    },
    addBookingFlights: (state, action) => {
      state.loading = false;
      state.flightBooking = action.payload;
      state.error = false;
    },
    getBookingFlights: (state) => {
      state.loading = false;
      state.flightBooking = state.flightBooking;
      state.error = false;
    },
    flightBookingError: (state) => {
      state.loading = false;
      state.error = true;
    },
    formDetails: (state, action) => {
      state.form = [...state.form, action.payload];
    },
  },
});

export const {
  flightBookingLoading,
  addBookingFlights,
  flightBookingError,
  formDetails,
} = flightBookingSlice.actions;

export default flightBookingSlice.reducer;
