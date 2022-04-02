import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hotelBooking: {},
    hotelLoading: false,
    hotelError: false,
    form: [],
};

export const hotelBookingSlice = createSlice({
    name: "hotelBooking",
    initialState,

    reducers: {
        hotelBookingLoading: (state) => {
            state.hotelLoading = true;
        },
        addBookingHotels: (state, action) => {
            state.hotelLoading = false;
            state.hotelBooking = action.payload;
            state.hotelError = false;
        },
        getBookingHotels: (state) => {
            state.hotelLoading = false;
            state.hotelBooking = state.hotelBooking;
            state.hotelError = false;
        },
        hotelBookingError: (state) => {
            state.hotelLoading = false;
            state.hotelError = true;
        },
        formDetails: (state, action) => {
            state.form = [...state.form, action.payload];
        },
    },
});

export const {
    hotelBookingLoading,
    addBookingHotels,
    hotelBookingError,
    formDetails,
} = hotelBookingSlice.actions;

export default hotelBookingSlice.reducer;
