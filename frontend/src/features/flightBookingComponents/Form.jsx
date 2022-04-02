import React from "react";
import { useState } from "react";
import styles from "./flightbooking.module.css";
import { useDispatch } from "react-redux";
import { formDetails } from "./flightBookingSlice";
import Alert from "@mui/material/Alert";
export const Form = ({ tag }) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const formInfo = {
    name: name,
    lastName: lastName,
  };
  const submit = () => {
    if (name && lastName) {
      dispatch(formDetails(formInfo));
      setName("");
      setLastName("");
      setAlert(false);
    } else {
      // alert("Fill complete details");
      setAlert(true);
    }
  };
  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid rgb(248, 248, 248)",
        margin: "2%",
        padding: "1%",
        borderRadius: "5px",
      }}
    >
      <b style={{ padding: "2%" }}>Adult {tag}</b>
      <div className={styles.form}>
        <input
          placeholder="First and Middle Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
        <button className={styles.btnSubmit} onClick={submit}>
          ADD
        </button>
      </div>
      {alert && (
        <>
          <Alert severity="error">
            There is an error - kindly fill in all required details{" "}
          </Alert>
        </>
      )}
    </div>
  );
};
