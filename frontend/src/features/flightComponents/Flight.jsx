import React, { useEffect } from "react";
import { SingleFlight } from "./SingleFlight";
import styles from "./singleflight.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFlights, flightError, flightLoading } from "./flightSlice";
import { CircularProgress, Slider } from "@mui/material";
import { useState } from "react";
export const Flight = () => {
  const [flight, setFlight] = useState([]);
  const [duration, setDuration] = useState(true);
  const [departure, setDeparture] = useState(true);
  const [arrival, setArrival] = useState(true);
  const [fare, setFare] = useState(true);
  const [check, setCheck] = useState(true);
  const [value, setValue] = useState([0, 45]);
  const [stopCheck, setStopCheck] = useState(true);
  let { loading, error, flights } = useSelector((state) => ({
    loading: state.flight.loading,
    error: state.flight.error,
    flights: state.flight.flightDetails,
  }));
  const dispatch = useDispatch();
  const getFlight = () => {
    console.log(stopCheck, check);
    console.log("getFlight");
    dispatch(flightLoading());
    fetch("https://makemytripback.herokuapp.com/flights")
      .then((r) => r.json())
      .then((r) => {
        dispatch(addFlights(r));
        setFlight(r);
      })
      .catch((e) => dispatch(flightError()));
  };

  const sorting = (tag) => {
    if (tag === "departure") {
      if (departure === true) {
        flights = flight.slice().sort((a, b) => {
          return (
            a.departure_time.split(":").join("") -
            b.departure_time.split(":").join("")
          );
        });
        setFlight(flights);
      } else {
        flights = flight.slice().sort((a, b) => {
          return (
            b.departure_time.split(":").join("") -
            a.departure_time.split(":").join("")
          );
        });
        setFlight(flights);
      }
    }
    if (tag === "arrival") {
      if (arrival === true) {
        flights = flight.slice().sort((a, b) => {
          return (
            a.arrival_time.split(":").join("") -
            b.arrival_time.split(":").join("")
          );
        });
        setFlight(flights);
      } else {
        flights = flight.slice().sort((a, b) => {
          return (
            b.arrival_time.split(":").join("") -
            a.arrival_time.split(":").join("")
          );
        });
        setFlight(flights);
      }
    }
    if (tag === "fare") {
      if (fare === true) {
        flights = flight.slice().sort((a, b) => a.fare - b.fare);
        setFlight(flights);
      } else {
        flights = flight.slice().sort((a, b) => b.fare - a.fare);
        setFlight(flights);
      }
    }
  };
  const handleFilters = (info) => {
    console.log("fliter");
    console.log(stopCheck, check);
    if (info.startsWith("departure")) {
      if (info === "departure_1") {
        flights = flight.filter(
          (item) => item.departure_time.split(":").join("") < Number("0060")
        );

        setFlight([...flights]);
      }
      if (info === "departure_2") {
        flights = flight.filter(
          (item) =>
            item.departure_time.split(":").join("") >= Number("0060") &&
            item.departure_time.split(":").join("") <= Number("0000")
        );

        setFlight(flights);
      }
      if (info === "departure_3") {
        flights = flight.filter(
          (item) =>
            item.departure_time.split(":").join("") >= Number("0000") &&
            item.departure_time.split(":").join("") <= Number("1600")
        );

        setFlight(flights);
      }
      if (info === "departure_4") {
        flights = flight.filter(
          (item) => item.departure_time.split(":").join("") >= Number("1600")
        );

        setFlight(flights);
      }
    }
    if (info.startsWith("non_stop")) {
      flights = flight.filter((item) => item.stops === "Non stop");
      setFlight(flights);
    }
    if (info.startsWith("1_stop")) {
      flights = flight.filter((item) => item.stops !== "Non stop");
      setFlight(flights);
    }
  };

  useEffect(() => {
    getFlight();
  }, []);

  return (
    <div>
      {loading ? (
        <div style={{ width: "100px", margin: "auto", marginTop: "100px" }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <h1>Something Went Wrong</h1>
      ) : (
        flights && (
          <div className={styles.box}>
            <div className={styles.filterDiv}>
              <div className={styles.first}>
                <b>Popular Filters</b>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span>Refundable Fares</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span>Non stop</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span>Indi Go</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span>Morning Departure</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span> Late Departure</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span>Go First</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span>Vistara</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span>Air India</span>
                </div>
              </div>
              <div
                className={styles.first}
                onChange={(e) => {
                  check ? handleFilters(e.target.name) : getFlight();
                }}
                // onChange={(e) => handleFilters(e.target.name)}
              >
                <b>Departure From New Delhi</b>
                <div className={styles.filterCheck}>
                  <input
                    type="checkbox"
                    // checked={check}
                    onClick={() => setCheck(!check)}
                    name={"departure_1"}
                  />
                  <span>Before 6 AM</span>
                </div>
                <div className={styles.filterCheck}>
                  <input
                    type="checkbox"
                    onClick={() => setCheck(!check)}
                    name="departure_2"
                  />
                  <span>6 AM - 12 PM</span>
                </div>
                <div className={styles.filterCheck}>
                  <input
                    type="checkbox"
                    onClick={() => setCheck(!check)}
                    name="departure_3"
                  />
                  <span>12 PM to 6 PM</span>
                </div>
                <div className={styles.filterCheck}>
                  <input
                    type="checkbox"
                    onClick={() => setCheck(!check)}
                    name="departure_4"
                  />
                  <span>After 6 PM</span>
                </div>
              </div>
              <div className={styles.first}>
                <b>One Way Price</b>
                <Slider
                  // getAriaLabel={() => "Temperature range"}

                  value={value}
                  valueLabelDisplay="auto"
                />
              </div>
              <div
                onChange={(e) => {
                  stopCheck ? handleFilters(e.target.name) : getFlight();
                }}
                className={styles.first}
              >
                <b>Stops From New Delhi</b>

                <div className={styles.filterCheck}>
                  <input
                    type="checkbox"
                    onClick={() => setStopCheck(!stopCheck)}
                    name="non_stop"
                  />
                  <span>Non Stop</span>
                </div>
                <div className={styles.filterCheck}>
                  <input
                    type="checkbox"
                    onClick={() => setStopCheck(!stopCheck)}
                    name="1_stop"
                  />
                  <span>1 Stop</span>
                </div>
              </div>
              <div className={styles.first}>
                <b>Airlines</b>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span>Air India (3)</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span>Indigo (3)</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span> Vistara (3)</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span> Go First (3)</span>
                </div>
                <div className={styles.filterCheck}>
                  <input type="checkbox" />
                  <span> Spice Jet (3)</span>
                </div>
              </div>
            </div>

            <div className={styles.container}>
              <div className={styles.heading}>
                <h3>{flights && <>Flights from New Delhi to Bangalore</>}</h3>
              </div>
              <div className={styles.guidelines}>
                <img
                  className={styles.guidelineImg}
                  src="https://logodix.com/logo/1033309.jpg"
                />
                <div style={{ marginTop: "5px" }}>
                  <h5 style={{ margin: "0px" }}>
                    Important Advisories & State Guidelines
                  </h5>
                  <p
                    style={{ margin: "0px", padding: "0px", fontSize: "12px" }}
                  >
                    With travel opening up, govt. advisories and state/UT
                    guidelines are constantly evolving. Please check the latest
                    updates before travelling.
                  </p>
                </div>
              </div>
              <div className={styles.sort}>
                <div className={styles.sortInnerDiv}>
                  <p style={{ fontWeight: "800" }}>Sorted by:</p>
                  <p
                    onClick={() => {
                      sorting("departure");
                      setDeparture(!departure);
                    }}
                  >
                    Departure {departure ? <>&#8595;</> : <>&#8593;</>}
                  </p>
                  <p>Duration {duration ? <>&#8595;</> : <>&#8593;</>}</p>
                  <p
                    onClick={() => {
                      sorting("arrival");
                      setArrival(!arrival);
                    }}
                  >
                    Arrival {arrival ? <>&#8595;</> : <>&#8593;</>}
                  </p>
                  <p
                    onClick={() => {
                      sorting("fare");
                      setFare(!fare);
                    }}
                  >
                    Price {fare ? <>&#8595;</> : <>&#8593;</>}
                  </p>
                </div>
              </div>
              {flight.map((item) => (
                <React.Fragment key={item._id}>
                  <SingleFlight {...item} />
                </React.Fragment>
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};
