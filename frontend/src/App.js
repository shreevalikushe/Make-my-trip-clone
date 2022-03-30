import React from "react";
import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Flight } from "./features/flightComponents/Flight";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
