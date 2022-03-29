import React from "react";
import { Route, Routes } from "react-router-dom";
import { FlightBooking } from "../features/flightBookingComponents/FlightBooking";
import { Flight } from "../features/flightComponents/Flight";
import { FlightPayment } from "../features/FlightPayment/FlightPayment";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/flights" element={<Flight />} />
      <Route path="/flightBooking/:id" element={<FlightBooking />} />
      <Route path="/flightpayment/:price" element={<FlightPayment />} />
    </Routes>
  );
};
