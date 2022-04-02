import React, { useEffect } from "react";
import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Flight } from "./features/flightComponents/Flight";
import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";
import { getValue } from "./Utils/LocalStorage";

import ProductPage from "./HotelsSecondPage/ProductPage"
function App() {
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  console.log("isUserLoggedIn", isUserLoggedIn);
  const user = useSelector((state) => state.auth.userName);

  return (
    <div className="App">
      <Navbar isUserLoggedIn={isUserLoggedIn} user={user} />
      {/* <Review /> */}
      <AllRoutes />
      
      {/* <ProductPage/> */}
    </div>
  );
}

export default App;
