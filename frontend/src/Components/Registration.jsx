import React, {useState} from "react";
import styles from "./registration.module.css";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Registration = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <div className={styles.registrationContainer}>
      <div className={styles.email_mobile_text}>
        <p>Name</p>
        <input type="text" />
      </div>
      <div className={styles.email_mobile_text}>
        <p> Mobile Number</p>
        <input type="number" />
      </div>
      <div className={styles.email_mobile_text}>
        <p>Password</p>
        <input type="password" />
      </div>
      <div className={styles.email_mobile_text}>
        <p>Confirm Password</p>
        <input type = {togglePassword ?"text" : "password"} />
          <div className={styles.VisibilityIconContainer} onClick={() => setTogglePassword(!togglePassword)}>
            {togglePassword ?  <VisibilityOffIcon  />: < VisibilityIcon/> }
        </div>
      </div>

      <button  className={styles.otp_mobile_login_button}>Sign Up</button>

      <div style={{textAlign:"center" , marginTop:0}}>or</div>
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
