import React, { useContext } from "react";
import img1 from "../../imgs/img1.png";
import promo from "../../imgs/promo.png";
import styles from "./flightbooking.module.css";
import img from "../../imgs/img.png";
import { SingleBooking } from "./SingleBooking";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { Form } from "./Form";
import { useNavigate } from "react-router-dom";
import Login from "../../Components/Login";
import { ListenerContext } from "../../Contexts/ListenerProvider";

export const FlightBooking = () => {
  const navigate = useNavigate();
  const { loading, error, flight } = useSelector((state) => ({
    loading: state.flightBooking.loading,
    flight: state.flightBooking.flightBooking,
    error: state.flightBooking.error,
  }));
  var price = flight.fare;
  const [bfare, setBfare] = useState(false);
  const [surge, setSurge] = useState(false);
  const finalAmount = 2 * price + 1860;
  const { setOpen } = useContext(ListenerContext);

  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);

  const handleButton = () => {
    if (isUserLoggedIn) {
      navigate(`/flightpayment/${finalAmount}`);
    } else {
      setOpen(true);
    }
  };
  return (
    <div>
      {loading ? (
        <div style={{ width: "100px", margin: "auto" }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <h1>Something Went Wrong</h1>
      ) : (
        flight && (
          <React.Fragment>
            <div className={styles.header}>
              <b>Complete Your Booking</b>
            </div>
            <div className={styles.main_cont}>
              <div className={styles.info_cont}>
                <React.Fragment key={flight._id}>
                  <SingleBooking flight={flight} />
                </React.Fragment>
                <img style={{ width: "100%", marginTop: "1%" }} src={img} />
                <img style={{ width: "100%", marginTop: "1%" }} src={img1} />
                <div
                  style={{
                    width: "98%",
                    margin: "1%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <b style={{ marginLeft: "1%" }}>Travel Details</b>
                  <Form tag={1} />
                  <Form tag={2} />

                  <button onClick={handleButton} className={styles.btnPay}>
                    Pay Now
                  </button>
                </div>
              </div>
              <div className={styles.fare}>
                <b>Fare Summary</b>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      borderRadius: "50%",
                      marginRight: "1%",
                      cursor: "pointer",
                      width: "9%",
                      height: "100%",
                      textAlign: "center",
                    }}
                    onClick={() => setBfare(!bfare)}
                  >
                    {bfare ? "-" : "+"}
                  </button>
                  <p
                    style={{ fontSize: "15px", margin: "0px", padding: "0px" }}
                  >
                    Base Fare
                  </p>
                </div>
                {bfare && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <b style={{ fontSize: "14px" }}>
                      Adult(s) (2 X ₹{price}): ₹{2 * price}
                    </b>
                  </div>
                )}
                <div
                  style={{ borderBottom: "1px solid gray", marginTop: "25px" }}
                ></div>{" "}
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <button
                    style={{
                      backgroundColor: "white",
                      border: "1px solid black",
                      borderRadius: "50%",
                      marginRight: "1%",
                      cursor: "pointer",
                      width: "9%",
                      height: "100%",
                      textAlign: "center",
                    }}
                    onClick={() => setSurge(!surge)}
                  >
                    {surge ? "-" : "+"}
                  </button>
                  <p
                    style={{ fontSize: "15px", margin: "0px", padding: "0px" }}
                  >
                    Fee & Surcharges
                  </p>
                </div>
                {surge && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <span style={{ textAlign: "center" }}>
                      {" "}
                      <b style={{ fontSize: "14px" }}>
                        Total fee & surcharges: ₹1860
                      </b>{" "}
                    </span>{" "}
                  </div>
                )}
                <div
                  style={{ borderBottom: "1px solid gray", marginTop: "25px" }}
                ></div>{" "}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <b>
                    <p
                      style={{
                        fontSize: "15px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      <>Total Amount ₹ {finalAmount}</>
                    </p>
                  </b>
                  <b>
                    <p
                      style={{
                        fontSize: "15px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    >
                      {}{" "}
                    </p>
                  </b>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <img
                    style={{ width: "100%", cursor: "pointer" }}
                    src={promo}
                  />
                </div>
              </div>
            </div>
          </React.Fragment>
        )
      )}
    </div>
  );
};
