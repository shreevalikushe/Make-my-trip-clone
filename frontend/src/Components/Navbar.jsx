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
import {
  WorkOutlineOutlined,
  PersonOutlineOutlined
} from '@mui/icons-material';
import { getValue } from "../Utils/LocalStorage";

const Navbar = ({ isUserLoggedIn, user }) => {
  const [open, setOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);
  const navigate = useNavigate();
  const handleClickFlight = () => navigate('/flights');
  const handleClickHotels = () => navigate('/hotels');
  console.log("user is logged in? ", isUserLoggedIn)
  console.log("user name", user)
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
                <span>
                  <FlightIcon
                    className={styles.flightICON}
                    style={{ fontSize: 30, padding: 4 }}
                  ></FlightIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Flights</p>
              </div>
              <div onClick={handleClickHotels}>
                <span>
                  <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Hotels</p>
              </div>
              <div>
                <span>
                  <HomeWorkIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></HomeWorkIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Homestays</p>
              </div>

              <div>
                <span>
                  <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Trains</p>
              </div>
              <div>
                <span>
                  <DirectionsBusFilledIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></DirectionsBusFilledIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Buses</p>
              </div>
              <div>
                <span>
                  <LocalTaxiIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></LocalTaxiIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Cabs</p>
              </div>
              <div>
                <span>
                  <CreditCardIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></CreditCardIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Visa</p>
              </div>
              <div>
                <span>
                  <FlightTakeoffIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></FlightTakeoffIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Charter flights</p>
              </div>
              <div>
                <span>
                  <DownhillSkiingIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></DownhillSkiingIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Activities</p>
              </div>
            </div>

            {/* login container */}
            {!isUserLoggedIn ?
              (<div className={styles.loginContainer}>
                <Login />
              </div>
              ) : (
                <div className={styles.loginContainer}>
                  <div
                    className={styles.userContainer}
                    onClick={() => setOpenProfile(!openProfile)}
                  >
                    <div className={styles.user}>
                      <p>{user ? user.split("")[0] : ""}</p>
                    </div>
                    <p>Hi {user ? user.split(" ")[0] : ""}</p>
                    {openProfile &&
                      <div className={styles.profileModal}>
                        <div className={styles.profileModalTab}>
                          <div
                            className={styles.indProfileModalTab}
                            onClick={() => navigate("/myprofile")}
                          >
                            <PersonOutlineOutlined
                              style={{ fontSize: 25, color: "#e4e4e4" }}
                            />
                            <p>My Profile</p>
                          </div>
                          <div
                            className={styles.indProfileModalTab}
                            onClick={() => navigate("/mytrips")}
                          >
                            <WorkOutlineOutlined
                              style={{ fontSize: 25, color: "#e4e4e4" }}
                            />
                            <p>My Trips</p>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
              )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
