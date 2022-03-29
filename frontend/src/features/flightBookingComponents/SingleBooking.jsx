import React from "react";
import styles from "./flightbooking.module.css";
export const SingleBooking = ({ flight }) => {
  return (
    <div className={styles.singlebooking}>
      <div>
        <b>
          {flight.departure} {flight.departure && <>&#8594;</>} {flight.arrival}
        </b>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ backgroundColor: "rgb(255, 237, 209)", padding: "0.2rem" }}
        >
          Tuesday, 29th March
        </div>
        <div style={{ justifySelf: "end" }}>
          {flight.stops} ~ {flight.duration}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p style={{ fontSize: "14px" }}>{flight.name} - A1 803</p>
        <p style={{ fontSize: "14px" }}>
          Economy {">"}{" "}
          <span style={{ color: "rgb(136, 196, 134)" }}>Economy Basic</span>
        </p>
      </div>
      <div className={styles.inner_cont}>
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <p>
            <b>{flight.departure_time}</b>
          </p>
          <p></p>
          <p>
            <b>{flight.departure}</b>
            <span> Indira Gandhi International Airport, Terminal 3</span>
          </p>
        </div>
        <div style={{ marginLeft: "10%" }}>{flight.duration}</div>
        <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <p>
            <b>{flight.arrival_time}</b>
          </p>
          <p></p>
          <p>
            <b>{flight.arrival}</b>
            <span> Bengaluru International Airport</span>
          </p>
        </div>
      </div>
    </div>
  );
};
