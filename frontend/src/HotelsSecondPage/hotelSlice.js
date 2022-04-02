import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotelDetails: [],
  loading: false,
  error: false,
};

export const hotelSlice = createSlice({
  name: "hotels",
  initialState,

  reducers: {
    hotelLoading: (state) => {
      state.loading = true;
    },
    addHotels: (state, action) => {
      state.loading = false;
      state.hotelDetails = action.payload;
      state.error = false;
    },
    hotelError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { hotelLoading, addHotels, hotelError } = hotelSlice.actions;

export default hotelSlice.reducer;
