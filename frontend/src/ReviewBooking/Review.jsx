import React, { useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { AiOutlineInfoCircle } from "react-icons/ai";

import style_r from "./Review.module.css";
import { style } from "@mui/system";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import { ListenerContext } from "../Contexts/ListenerProvider";
import { useNavigate } from "react-router-dom";
const Review = () => {
  const { loading, error, singleHotel } = useSelector((state) => ({
    loading: state.hotelBooking.loading,
    error: state.hotelBooking.error,
    singleHotel: state.hotelBooking.hotelBooking,
  }));
  const navigate = useNavigate();
  const { setOpen } = useContext(ListenerContext);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
  const handleButton = () => {
    if (isUserLoggedIn) {
      navigate(`/payment/${singleHotel.price + 778}`);
    } else {
      setOpen(true);
    }
  };
  return (
    <>
      {loading ? (
        <div style={{ width: "100px", margin: "auto" }}>
          <CircularProgress />
        </div>
      ) : error ? (
        <h1>Something Went Wrong</h1>
      ) : (
        <>
          <div className={style_r.container}>
            <div className={style_r.header_review}>
              <h2>Review your Booking</h2>
            </div>

            <div className={style_r.contain}>
              <div>
                <div className={style_r.hotelinfo}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className={style_r.icon} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ fontWeight: "bold", fontSize: 17 }}>
                        HOTEL INFORMATION
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <hr className={style_r.hr} />

                      <div className={style_r.infodiv}>
                        {/* top div done */}
                        <div className={style_r.destinationdiv}>
                          <div className={style_r.left}>
                            <h1>IHCL Tajness-A Commitment Restrengthened</h1>
                            <p>Safety, hygiene & social distancing norms</p>

                            <h3>{singleHotel.name}</h3>
                            <p className={style_r.db}>
                              {singleHotel.location}-{singleHotel.country}
                            </p>
                          </div>

                          <div className={style_r.right}>
                            <img src={singleHotel.cover} alt="not found" />
                          </div>
                        </div>

                        {/* mid */}
                        <hr />
                        <div className={style_r.date_div}>
                          <div className={style_r.leftd}>
                            <div className={style_r.first}>
                              <p>CHECK IN</p>
                              <h2>12 PM</h2>
                              {/* <p>Monday,2 PM</p> */}
                            </div>

                            <div className={style_r.second}>
                              <p>1 NIGHT</p>
                            </div>
                            <div className={style_r.first}>
                              <p>CHECK OUT</p>
                              <h2>12 AM</h2>
                              {/* <p>Tuesday,12 PM</p> */}
                            </div>
                          </div>

                          <div className={style_r.rightd}>
                            <div className={style_r.room}>
                              <b>2</b> Adults | 1 Room
                            </div>
                          </div>
                        </div>

                        {/* last div */}
                        <div className={style_r.lastdiv}>
                          <div className={style_r.top_last}>
                            <div className={style_r.top_f}>
                              <h4>SUPERIOR CHARM CITY VIEW QUEEN BED</h4>
                              <p>2 Adults</p>
                            </div>
                            <hr />
                            <div className={style_r.top_s}>
                              <h4>Price Includes</h4>
                              <p>
                                {" "}
                                <span className={style_r.dot}></span> No meals
                                included
                              </p>
                              <p>
                                {" "}
                                <span className={style_r.dot}></span> MMT
                                Flexible Rate
                              </p>
                              <p>
                                {" "}
                                <span className={style_r.dot}></span> Assured
                                Taj Gift Card of minimum INR 500
                              </p>
                              <p>
                                {" "}
                                <span className={style_r.dot}></span>{" "}
                                <span>Non-Refundable</span> | On
                                Cancellation,YOu will not get any refund{" "}
                                <span className={style_r.cancellaion}>
                                  Cancellation policy details{" "}
                                </span>{" "}
                              </p>
                            </div>
                            {/* <hr /> */}
                            {/* <div className={style_r.top_l}>

                        



                     
                      
                      </div> */}
                          </div>

                          <div className={style_r.top_botom}>
                            <div className={style_r.botom_l_info}>
                              Important information
                            </div>

                            <div className={style_r.botom_l_rules}>
                              <h3>Hotel Rules</h3>

                              <p>
                                <span className={style_r.dot}></span> Suitable
                                for children
                              </p>

                              <p>
                                <span className={style_r.dot}></span> Pets are
                                allowed
                              </p>

                              <p>
                                <span className={style_r.dot}></span> Quarantine
                                protocols are being followed as per local
                                government authorities
                              </p>

                              <p>
                                <span className={style_r.dot}></span>Guests from
                                containment zones are not allowed
                              </p>

                              <div className={style_r.rules_icon}>
                                {/* <h5>Read All Hotels Rules  <FiChevronRight className={style_r.greatthanicon}/>  </h5> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>

                {/* pay now */}

                <br />
                <br />
                <br />
                <br />
                <div className={style_r.hotelinfo}>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className={style_r.icon} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography style={{ fontWeight: "bold", fontSize: 17 }}>
                        TRAVEL SAFE WITH TRIP INSURANCE
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <hr className={style_r.hr} />

                      <div className={style_r.infodiv}>
                        <div className={style_r.top_s}>
                          <div className={style_r.iconimg}>
                            <h4>One insurance, Many benefits </h4>
                            <img
                              src={
                                "https://imgak.mmtcdn.com/flights/assets/media/mobile/common/2X/adityaBirlaIcon.png"
                              }
                              alt="not found"
                            />
                          </div>

                          {/* <div className={style_r.leftp}> */}

                          {/* <div> */}
                          <p>
                            {" "}
                            <span className={style_r.dot}></span>Rs.5 Lakhs
                            Medical Benefits including Covid
                          </p>

                          <p>
                            {" "}
                            <span className={style_r.dot}></span> Rs.20K for
                            Bounced Booking of Accomodation
                          </p>

                          <p>
                            {" "}
                            <span className={style_r.dot}></span> Rs.25K for
                            Loss of Baggage & other personal effects
                          </p>

                          <div className={style_r.leftp}>
                            <div>
                              <p>
                                {" "}
                                <span className={style_r.dot}></span> Rs.15K for
                                Trip Interruption or Cancellation for any
                                medical reason
                              </p>

                              <p>
                                {" "}
                                <span className={style_r.dot}></span>Rs.1 Lakh
                                for Home Burglary
                              </p>
                            </div>

                            {/* right side  */}
                            <div className={style_r.gstdiv}>
                              <div>
                                <p>
                                  {" "}
                                  <span className={style_r.rupess}>
                                    ₹ 59
                                  </span>{" "}
                                  per person{" "}
                                </p>

                                <p className={style_r.gst_inclued}>
                                  Non Refundable | 18% GST Included
                                </p>
                              </div>
                              <button>ADD</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>

                <div className={style_r.paynow_container}>
                  <p>
                    By proceeding, I agree to MakeMyTrip’s{" "}
                    <span>User Agreement, Terms of Service</span> and{" "}
                    <span>Cancellation & Property Booking Policies</span> .
                  </p>
                  <button onClick={handleButton}>PAY NOW</button>
                </div>
              </div>

              <div className={style_r.pirze_breakup_div}>
                <h3>PRICE BREAK-UP</h3>

                <hr />

                <div className={style_r.room_prize_deatials}>
                  <div className={style_r.room_night}>
                    <div>
                      <h4>1 Room-1 Night</h4>
                      <p>Base Price</p>
                    </div>

                    <span>₹ {singleHotel.price + 720}</span>
                  </div>
                  <hr />

                  <div className={style_r.room_discount}>
                    <span>
                      Total Discount{" "}
                      <AiOutlineInfoCircle
                        className={style_r.infomation_icon}
                      />{" "}
                    </span>

                    <span>₹ 720</span>
                  </div>
                  <hr />
                  <div className={style_r.room_prize_after_discount}>
                    <span>Price after Discount</span>
                    <span>₹ {singleHotel.price}</span>
                  </div>
                  <hr />
                  <div className={style_r.room_discount}>
                    <span>
                      Hotel Taxes{" "}
                      <AiOutlineInfoCircle
                        className={style_r.infomation_icon}
                      />{" "}
                    </span>

                    <span>₹ 778</span>
                  </div>
                  <hr />
                  <div className={style_r.room_donate_for_covid}>
                    <div className={style_r.donate}>
                      <input type="checkbox" className={style_r.checkbox} />
                      <p>
                        Donate ₹ 10 for COVID -19
                        <br />
                        Relief and Other Charity
                        <br />
                        Initiatives
                        <span className={style_r.tc}> T&Cs</span>
                      </p>
                      <AiOutlineInfoCircle
                        className={style_r.infomation_icon}
                      />
                    </div>

                    <span>₹ 10</span>
                  </div>
                </div>

                <hr />
                <div className={style_r.room_toaal_amount}>
                  <span className={style_r.total_amount}>
                    Total Amout to be paid
                  </span>
                  <span className={style_r.rs}>
                    ₹ {singleHotel.price + 778}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Review;
