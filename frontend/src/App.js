import React from "react";
import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Flight } from "./features/flightComponents/Flight";
import Navbar from "./Components/Navbar"
import ProductPage from "./HotelsSecondPage/ProductPage";

function App() {
  return (
    <div className="App">

      <Navbar />
      <AllRoutes />

      {/* <ProductPage/> */}

    </div>
  );
}

export default App;
