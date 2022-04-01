import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotelBooking: [],
  loading: false,
  error: false,
};

export const hotelBookingSlice = createSlice({
  name: "hotelBooking",
  initialState,

  reducers: {
    hotelBookingLoading: (state) => {
      state.loading = true;
    },
    addHotelBooking: (state, action) => {
      state.loading = false;
      state.hotelBooking = action.payload;
      state.error = false;
    },
    hotelBookingError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { hotelBookingLoading, addHotelBooking, hotelBookingError } =
  hotelBookingSlice.actions;

export default hotelBookingSlice.reducer;
