import React from "react";
import MoneyIcon from "@mui/icons-material/Money";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./flightpayment.module.css";
import payment from "../../imgs/payment.png";
import { useState } from "react";

export const FlightPayment = () => {
  const [select1, setSelect1] = useState(true);
  const [select2, setSelect2] = useState(false);
  const [select3, setSelect3] = useState(false);
  const [select4, setSelect4] = useState(false);
  const [select5, setSelect5] = useState(false);
  const [select6, setSelect6] = useState(false);
  const [UPI, setUPI] = useState("");
  const navigate = useNavigate();
  const { price } = useParams();
  const handle_button1 = (e) => {
    setSelect1(true);
    setSelect2(false);
    setSelect3(false);
    setSelect4(false);
    setSelect5(false);
    setSelect6(false);
  };
  let check = "shreevali@ybl";
  const handlePayment = () => {
    if (UPI === check) {
      navigate("/");
    } else {
      setUPI("");
      alert("Enter Valid UPI ID");
    }
  };
  return (
    <div className={styles.mntBox}>
      <div className={styles.main_heading_choosing_payment}>
        <h2> Payment Options</h2>
      </div>
      <div className={styles.choose_payment_div}>
        <div className={styles.payment_mode}>
          <button
            id="1"
            onClick={handle_button1}
            className={
              select1
                ? styles.payment_mode_select_button
                : styles.payment_mode_button
            }
          >
            <MoneyIcon />
            <p className={styles.button_name}>UPI Payment</p>
          </button>
          <button
            id="2"
            className={
              select2
                ? styles.payment_mode_select_button
                : styles.payment_mode_button
            }
          >
            <CreditCardIcon />
            <p className={styles.button_name}>Credit card</p>
          </button>
          <button
            id="3"
            className={
              select3
                ? styles.payment_mode_select_button
                : styles.payment_mode_button
            }
          >
            {" "}
            <CreditCardIcon />
            <p className={styles.button_name}>Debit Card</p>
          </button>
          <button
            id="4"
            className={
              select4
                ? styles.payment_mode_select_button
                : styles.payment_mode_button
            }
          >
            <AccountBalanceWalletOutlinedIcon />
            <p className={styles.button_name}> Paytm/Payzapp/Wallets</p>
          </button>
          <button
            id="5"
            className={
              select5
                ? styles.payment_mode_select_button
                : styles.payment_mode_button
            }
          >
            <AccountBalanceIcon />{" "}
            <p className={styles.button_name}>Net Banking</p>
          </button>
          <button
            id="6"
            className={
              select6
                ? styles.payment_mode_select_button
                : styles.payment_mode_button
            }
          >
            <PaymentsOutlinedIcon />
            <p className={styles.button_name}> EMI/Pay Later</p>
          </button>
        </div>
        <div
          style={{
            padding: "2%",
            borderRadius: "5px",
          }}
        >
          <div>
            <p className={styles.para_cash}>Enter UPI Id</p>
            <p>Make payment of ₹{price}/-</p>
          </div>
          <div className={styles.capche_div}>
            <div
              style={{ display: "flex", gap: "2rem", flexDirection: "column" }}
            >
              <input
                onChange={(e) => setUPI(e.target.value)}
                type="text"
                className={styles.capche_input}
              ></input>
              <button onClick={handlePayment} className={styles.payPlease}>
                <p>VERIFY AND PAY</p>
              </button>
            </div>
          </div>

          <img className={styles.payment_img} src={payment} />
          <div style={{ marginTop: "50px", fontSize: "12px", width: "80%" }}>
            <b>
              By continuing to pay, I understand and agree with the privacy
              policy, the user agreement and terms of service of makemytrip.
            </b>
          </div>
        </div>
      </div>
    </div>
  );
};
