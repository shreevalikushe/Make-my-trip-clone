import React from "react";
import { Route, Routes } from "react-router-dom";
import { FlightBooking } from "../features/flightBookingComponents/FlightBooking";
import { Flight } from "../features/flightComponents/Flight";
import { FlightPayment } from "../features/FlightPayment/FlightPayment";
import { Home } from "../features/Home/Home";
import { Profile } from "../features/Profile/Profile";
import { Trips } from "../features/Trips/Trips";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flights" element={<Flight />} />
      <Route path="/flightBooking/:id" element={<FlightBooking />} />
      <Route path="/flightpayment/:price" element={<FlightPayment />} />
      <Route path="/myprofile" element={<Profile />} />
      <Route path="/mytrips" element={<Trips />} />
    </Routes>
  );
};
