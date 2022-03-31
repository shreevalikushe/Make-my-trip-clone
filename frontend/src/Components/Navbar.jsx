import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import TrainIcon from "@mui/icons-material/Train";
import DirectionsBusFilledIcon from "@mui/icons-material/DirectionsBusFilled";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DownhillSkiingIcon from "@mui/icons-material/DownhillSkiing";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Login from "./Login";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleClickFlight = () => navigate("/flights");
  const handleClickHotels = () => navigate("/hotels");

  return (
    <>
      <nav className={styles.navbarWrapper}>
        <div className={styles.navbarContent}>
          {/* 1st part of navbar .ie. left side of navbar */}
          <div className={styles.leftSideNavbar}>
            {/* logo wrapper */}
            <div className={styles.logoWrapper}>
              <a href="/" className={styles.logoimg}>
                <img
                  src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/logo@2x.png"
                  alt="Logo"
                />
              </a>
            </div>
            {/* hamberger menu */}
            <div
              className={styles.hamburgr_menu}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <CloseIcon style={{ fontSize: "1.4em" }} />
              ) : (
                <MenuIcon style={{ fontSize: "1.4em" }} />
              )}
            </div>
          </div>

          {/* 2nd part of navbar will start which contains logo and login */}

          <div
            className={
              open ? styles.rightSideNavbarMobile : styles.rightSideNavbar
            }
          >
            {/* icons container */}
            <div className={styles.iconWrapper}>
              <div onClick={handleClickFlight}>
                
                  <FlightIcon
                    className={styles.flightICON}
                    style={{ fontSize: 30, padding: 4 }}
                  ></FlightIcon>
                
                <p style={{ marginTop: "0px"   }}>Flights</p>
              </div>
              <div onClick={handleClickHotels}>
               
                  <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
              
                <p style={{ marginTop: "0px" }}>Hotels</p>
              </div>
              <div>
              
                  <HomeWorkIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></HomeWorkIcon>
               
                <p style={{ marginTop: "0px" }}>Homestays</p>
              </div>

              <div>
              
                  <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
                
                <p style={{ marginTop: "0px" }}>Trains</p>
              </div>
              <div>
              
                  <DirectionsBusFilledIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></DirectionsBusFilledIcon>
                
                <p style={{ marginTop: "0px" }}>Buses</p>
              </div>
              <div>
                
                  <LocalTaxiIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></LocalTaxiIcon>
              
                <p style={{ marginTop: "0px" }}>Cabs</p>
              </div>
              <div>
              
                  <CreditCardIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></CreditCardIcon>
            
                <p style={{ marginTop: "0px" }}>Visa</p>
              </div>
              <div>
             
                  <FlightTakeoffIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></FlightTakeoffIcon>
               
                <p style={{ marginTop: "0px" }}>Charter flights</p>
              </div>
              <div>
                
                  <DownhillSkiingIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></DownhillSkiingIcon>
              
                <p style={{ marginTop: "0px" }}>Activities</p>
              </div>
            </div>

            {/* login container */}
            <div className={styles.loginContainer}>
              <Login />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
