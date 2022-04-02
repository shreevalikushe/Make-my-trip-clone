import React, { useState } from "react";
import styles from "./registration.module.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { updateValue } from "../Utils/LocalStorage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserName, signUp } from "../features/auth/auth.actions";

const Registration = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [togglePassword, setTogglePassword] = useState(false);
  const [credentials, setCredentials] = useState({
    name: "",
    mobile_number: "",
    password: "",
    email: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSignUp = async () => {
    try {
      const data = {
        name: credentials.name,
        mobile_number: credentials.mobile_number,
        email: credentials.email,
        password: credentials.password,
      };
      const response = await fetch(
        "https://makemytripback.herokuapp.com/auth/register",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const json = await response.json();
      console.log(json);

      if (json.status === 200) {
        // navigate("/");
        dispatch(signUp(json));
        dispatch(getUserName(credentials.name));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.registrationContainer}>
      <div className={styles.email_mobile_text}>
        <p>Name</p>
        <input
          type="text"
          name="name"
          value={credentials.name}
          onChange={onChange}
        />
      </div>
      <div className={styles.email_mobile_text}>
        <p> Mobile Number</p>
        <input
          type="number"
          name="mobile_number"
          value={credentials.mobile_number}
          onChange={onChange}
        />
      </div>
      <div className={styles.email_mobile_text}>
        <p>Password</p>
        <input
          type={togglePassword ? "text" : "password"}
          name="password"
          value={credentials.password}
          onChange={onChange}
        />
      </div>
      <div className={styles.email_mobile_text}>
        <p> Email</p>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={onChange}
        />
        <div
          className={styles.VisibilityIconContainer}
          onClick={() => setTogglePassword(!togglePassword)}
        >
          {togglePassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
        </div>
      </div>

      <button
        className={styles.otp_mobile_login_button}
        onClick={() => handleSignUp()}
      >
        Sign Up
      </button>

      <div style={{ textAlign: "center", marginTop: 0 }}>or</div>
      <div className={styles.google_login_container}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          alt="google logo"
        />
        <div>Login With Google</div>
      </div>

      <div className={styles.terms_text}>
        By proceeding, you agree to MakeMyTrip's
        <span>Privacy Policy</span> ,<span>Privacy Policy</span> and
        <span>T&Cs</span>
      </div>
    </div>
  );
};

export default Registration;
