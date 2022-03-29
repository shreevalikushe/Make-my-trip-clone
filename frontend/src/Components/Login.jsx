import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";

import styles from "./login.module.css";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [registrationModal, setRegistrationModal] = useState(true);
  const [loginModalOtp, setLoginModalOtp] = useState(false);

  const handleContinueRegistration = () => {
    setRegistrationModal(!registrationModal);
    setLoginModalOtp(!loginModalOtp);
  };
  const handleBackInLogin = () => {
    setRegistrationModal(!registrationModal);
    setLoginModalOtp(!loginModalOtp);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const dialogCss = {
    position: "fixed",
    width: 500,
    top: 60,
    left: 400,
    height: 500,
  };

  return (
    <div>
      <div className={styles.btn}>
        <Button onClick={handleClickOpen}>Login or create account</Button>
      </div>
      <Dialog PaperProps={{ sx: dialogCss }} open={open} onClose={handleClose}>
        <DialogContent>
          <div
            className={
              registrationModal ? styles.modalContainer : styles.display_none
            }
          >
            <div className={styles.personalBusiness}>
              <div>PERSONAL ACCOUNT</div>
              <div>MYBIZ ACCOUNT</div>
            </div>
            <div className={styles.login_sign_text}>Login/Signup</div>
            <div className={styles.email_mobile_text}>
              <p>Email or Mobile Number</p>
              <input type="text" />
            </div>
            <div
              className={styles.continue_text}
              onClick={handleContinueRegistration}
            >
              CONTINUE
            </div>
            <div className={styles.loginsignup_text}>Or Login/Signup With</div>
            <div className={styles.google_login_container}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google logo"
              />
              <div>Login With Google</div>
            </div>

            <div className={styles.terms_text}>
              By proceeding, you agree to MakeMyTrip's{" "}
              <span>Privacy Policy</span> ,<span>Privacy Policy</span> and{" "}
              <span>T&Cs</span>
            </div>
          </div>

          <div
            className={
              loginModalOtp
                ? styles.loginModalOtpContainer
                : styles.display_none
            }
          >
            <div className={styles.back_otp_text}onClick={handleBackInLogin}>Back</div>
            <div className={styles.otp_verifytext}>Verify Your Mobile Number</div>
            <div className={styles.otp_verifytext_mobile}>OTP has been sent to MOBILE</div>
            <div>OTP</div>
            <div className={styles.otp_mobile_input}>
              <input type="number" />
            </div>

            <div className={styles.otp_mobile_login_button} >
              Login
            </div>
            <div className={styles.otp_login_forgot_text} >
               or Login via Password
            </div>
          </div>
          {/* <LoginModalOtp /> */}
        </DialogContent>

        {/* <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Subscribe</Button> */}
      </Dialog>
    </div>
  );
}
