import React, { useState } from "react";
import styles from "./flight.module.css";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import FareTypes from "./FareTypes";
import { useNavigate } from "react-router-dom";

const FlightHome = () => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [departure, setDeparture] = React.useState(null);
  const [retrn, setRetrn] = React.useState(null);
  const [selectedButtonColor, setSelectedButtonColor] = useState(1)

  const [travellers, setTravellers] = React.useState(null);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  let ar1 = [0, 1, 2, 3, 4, 5];
  const [openTravellers, setOpenTravellers] = useState(false);
  const [togglePassengerColor, setTogglePassengerColor] = useState(false);
  const navigate = useNavigate();
  const onClickModal = (e) => {
    setOpenTravellers(!openTravellers);
    e.stopPropagation();
  };

  const onClickNoOfPass = (val) => {
    setTravellers(val);
  };
  const handleSubmit = () => {
    navigate("/flights");
  };
  return (
    <div className={styles.flight_wrapper}>
      <div className={styles.flight_container}>
        <div className={styles.tripInternational}>
          <div className={styles.multiple_trip}>
            <div>
              <input checked={true} type="radio" name="trip" />
              <div>ONEWAY</div>
            </div>
            <div>
              <input type="radio" name="trip" />
              <div>ROUND TRIP</div>
            </div>
            <div>
              <input type="radio" name="trip" />
              <div>MULTICITY</div>
            </div>
          </div>
          <div className={styles.book}>
            Book International and Domestic Flights
          </div>
        </div>

        {/* location of from and to  including date and passenger starts  */}
        <div className={styles.bookingSearch}>
          <div className={styles.fromToConnecting}>
            <div className={styles.fromTo}>
              <div className={styles.from}>
                <FormControl sx= {{ width: "100%" }}>
                  <InputLabel
                    sx={{ width: "100%" }}
                    id="demo-simple-select-label"
                  >
                    From
                  </InputLabel>
                  <Select
                    fullWidth
                    sx={{ width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={from}
                    label="from"
                    onChange={(e) => setFrom(e.target.value)}
                  >
                    <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Pune"}>Pune</MenuItem>
                    <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={styles.connectingIcon}>
                <ConnectingAirportsIcon fontSize="large" color="grey" />
              </div>
              <div className={styles.to}>
                <FormControl  sx={{  width: "100%" }}>
                  <InputLabel
                    fullWidth
                    sx={{  width: "100%" }}
                    id="demo-simple-select-label"
                  >
                    To
                  </InputLabel>
                  <Select
                    
                    sx={{  width: "100%" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={to}
                    label="to"
                    onChange={(e) => setTo(e.target.value)}
                  >
                    <MenuItem value={"Bengaluru"}>Bengaluru</MenuItem>
                    <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
                    <MenuItem value={"Pune"}>Pune</MenuItem>
                    <MenuItem value={"New Delhi"}>New Delhi</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>

          {/* departure and return date start */}
          <div className={styles.DepRetContainer}>
            {/* departure date starts */}
            <div style={{ width:"100%"}}>
            < FormControl sx={{width:"100%"}}>
           
              <LocalizationProvider
               sx={{width:"100%"}}
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  label="Departure"
                  value={departure}
                  onChange={(newValue) => {
                    setDeparture(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              </FormControl>
            </div>
            {/* departure date end */}

            {/* return date starts (just for ui purpose)*/}
            {/* <div>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Return"
                  value={retrn}
                  onChange={(newValue) => {
                    setRetrn(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </div> */}
            {/* return date starts (just for ui purpose)*/}
          </div>
          {/* departure and return date end */}

          {/* number of travellers start */}
          <div className={styles.travellerContainer}>
            <div onClick={onClickModal}>
              <div className={styles.travellersText}>TRAVELLERS</div>
              <div className={styles.noOfTraveller} style={{marginTop:"-6px"}}>
                <span>{travellers}</span>
                {travellers > 1 ? "Travellers" : ""}
              </div>
            </div>

            <div
              className={
                openTravellers ? styles.traveller_modal : styles.noDisplay
              }
            >
              <div className={styles.adultChild}>ADULTS (12y +)</div>
              <div className={styles.passengerButtonContainer}>
                {arr.map((val) => (
                  <div
                    key={val}
                    className={`${selectedButtonColor === val ? styles.clickPassenger : styles.passengerButton}`}
                    onClick={() => {
                      setTogglePassengerColor(!togglePassengerColor);
                      onClickNoOfPass(val);
                      setSelectedButtonColor(val)
                    }}
                  >
                    {val}
                  </div>
                ))}
              </div>

              {/* for children and inf */}
              <div className={styles.infantChildren}>
                <div>
                  <div className={styles.adultChild}>CHILDREN (2y - 12y )</div>
                  <div className={styles.passengerButtonContainer}>
                    {ar1.map((val) => (
                      <div
                        key={val}
                        className={
                          val === 0
                            ? styles.clickPassenger
                            : styles.passengerButton
                        }
                        onClick={() => {
                          setTogglePassengerColor(!togglePassengerColor);
                          onClickNoOfPass(val);
                        }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className={styles.adultChild}>INFANTS (below 2y)</div>
                  <div className={styles.passengerButtonContainer}>
                    {ar1.map((val) => (
                      <div
                        key={val}
                        className={
                          val === 0
                            ? styles.clickPassenger
                            : styles.passengerButton
                        }
                        onClick={() => {
                          setTogglePassengerColor(!togglePassengerColor);
                          onClickNoOfPass(val);
                        }}
                      >
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* for children and inf */}

              <div className={styles.modalApplyText} onClick={onClickModal}>
                <div>Apply</div>
              </div>
            </div>
          </div>
        </div>
        {/* location of departure and arrival  including date and passenger end  */}

        <FareTypes />
      </div>
      <div className={styles.buttonContainer}>
        <div type="submit" onClick={handleSubmit}>
          Search
        </div>
      </div>
    </div>
  );
};

export default FlightHome;
