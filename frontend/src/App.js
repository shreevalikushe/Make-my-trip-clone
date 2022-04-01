import React from "react";
import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Flight } from "./features/flightComponents/Flight";
import Navbar from "./Components/Navbar"
import { useSelector } from "react-redux";

function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn)
  console.log("isUserLoggedIn", isUserLoggedIn)
  return (
    <div className="App">
      <Navbar isUserLoggedIn={isUserLoggedIn} />
      <AllRoutes />

      {/* <ProductPage/> */}

    </div>
  );
}

export default App;
