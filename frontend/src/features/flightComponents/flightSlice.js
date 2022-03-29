import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flightDetails: [],
  loading: false,
  error: false,
};

export const flightSlice = createSlice({
  name: "flight",
  initialState,

  reducers: {
    flightLoading: (state) => {
      state.loading = true;
    },
    addFlights: (state, action) => {
      state.loading = false;
      state.flightDetails = action.payload;
      state.error = false;
    },
    flightError: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { flightLoading, addFlights, flightError } = flightSlice.actions;

export default flightSlice.reducer;
