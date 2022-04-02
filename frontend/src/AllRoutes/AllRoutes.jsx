import React from "react";
import { Route, Routes } from "react-router-dom";
import { FlightBooking } from "../features/flightBookingComponents/FlightBooking";
import { Flight } from "../features/flightComponents/Flight";
import { FlightPayment } from "../features/FlightPayment/FlightPayment";
import { Payment } from "../features/FlightPayment/Payment";
import { Home } from "../features/Home/Home";
import { Hotel } from "../features/Hotel/Hotel";
import { Profile } from "../features/Profile/Profile";
import { Trips } from "../features/Trips/Trips";
import ProductPage from "../HotelsSecondPage/ProductPage";
import Review from "../ReviewBooking/Review";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flights" element={<Flight />} />
      <Route path="/flightBooking/:id" element={<FlightBooking />} />
      <Route path="/payment/:price" element={<Payment />} />
      <Route path="/flightpayment/:price" element={<FlightPayment />} />
      <Route path="/myprofile" element={<Profile />} />
      <Route path="/mytrips" element={<Trips />} />
      <Route path="/hotels/:id" element={<Hotel />} />
      <Route path="/hotels" element={<ProductPage />} />
      <Route path="/hotels/review/:id" element={<Review />} />
    </Routes>
  );
};
