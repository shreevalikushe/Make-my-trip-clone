import React, { useContext } from "react";
import styles from "./Hotel.module.css";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
export const Hotel = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { loading, error, singleHotel } = useSelector((state) => ({
    loading: state.hotelBooking.loading,
    error: state.hotelBooking.error,
    singleHotel: state.hotelBooking.hotelBooking,
  }));

  const handleButton = () => {
    navigate(`/hotels/review/${id}`);
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
        singleHotel && (
          <div className={styles.indHotelContainer}>
            <div className={styles.coverImg}>
              <img src={singleHotel.cover} alt="No image found" />

              <div className={styles.indHotelDetails}>
                <div className={styles.indHotelCover}>
                  <img src={singleHotel.extraimageUrl[0]} alt="" />
                </div>
                <p className={styles.indHotelCardTitle}>{singleHotel.name}</p>
                <div className={styles.indHotelCardDetails}>
                  <div>
                    <p className={styles.indHotelCardAdults}>For 2 Adults</p>
                    <p className={styles.indHotelCardRefund}>Non-Refundable</p>
                    <p className={styles.indHotelCardRoom}>Room Only</p>
                  </div>
                  <div>
                    <p className={styles.indHotelCardDuration}>Per Night</p>
                    <p className={styles.indHotelCardCost}>
                      ₹{singleHotel.price}/-
                    </p>
                  </div>
                </div>
                <div className={styles.indHotelCardBookBtn}>
                  <p onClick={handleButton}>REVIEW HERE </p>
                </div>
              </div>
              <div className={styles.indHotelContent}>
                <div className={styles.ratingsSection}>
                  <div className={styles.ratingsView}>
                    <div className={styles.ratings}>
                      <p>{singleHotel.ratings}.8</p>
                    </div>
                    <p>Rated Excellent</p>
                  </div>
                  <div className={styles.cityView}>
                    <p>{singleHotel.location}</p>
                  </div>
                </div>
                <div className={styles.indHotelImgGallery}>
                  <p>Discover the Best of Luxury</p>
                  <div className={styles.indHotelImages}>
                    <img
                      className={styles.indImg}
                      src={singleHotel.extraimageUrl[0]}
                      alt=""
                    />
                    <img
                      className={styles.indImg}
                      src={singleHotel.extraimageUrl[1]}
                      alt=""
                    />
                    <img
                      className={styles.indImg}
                      src={singleHotel.extraimageUrl[2]}
                      alt=""
                    />
                  </div>
                </div>
                <div className={styles.indHotelImgGallery}>
                  <p>Property Highlights</p>
                  <div className={styles.propertyHighlightsChart}>
                    <div className={styles.propertyHighlights}>
                      <CheckCircleOutlineOutlined
                        style={{
                          color: "#4a4a4a",
                          marginRight: 10,
                          fontSize: 20,
                        }}
                      />
                      <p>300+ guests like you rated their stay Excellent</p>
                    </div>
                    <div className={styles.propertyHighlights}>
                      <CheckCircleOutlineOutlined
                        style={{
                          color: "#4a4a4a",
                          marginRight: 10,
                          fontSize: 20,
                        }}
                      />
                      <p>Perfect for one-night stay!</p>
                    </div>
                    <div className={styles.propertyHighlights}>
                      <CheckCircleOutlineOutlined
                        style={{
                          color: "#4a4a4a",
                          marginRight: 10,
                          fontSize: 20,
                        }}
                      />
                      <p>Relax with therapeutic treatments at Jiva Spa</p>
                    </div>
                    <div className={styles.propertyHighlights}>
                      <CheckCircleOutlineOutlined
                        style={{
                          color: "#4a4a4a",
                          marginRight: 10,
                          fontSize: 20,
                        }}
                      />
                      <p>Awards & Accolades: Best Bar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
};
