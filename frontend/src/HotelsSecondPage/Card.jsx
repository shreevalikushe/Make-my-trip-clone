import React from "react";
import style_c from "./Card.module.css";
import mtripicon from "../images/mtripicon.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  addHotelBooking,
  hotelBookingError,
  hotelBookingLoading,
} from "../features/Hotel/hotelBooking";
import { useDispatch } from "react-redux";

const Card = ({
  _id,
  country,
  cover,
  extraimageUrl,
  location,
  name,
  price,
  ratings,
}) => {
  const dispatch = useDispatch();
  const getSingleHotel = (id) => {
    dispatch(hotelBookingLoading());
    fetch(`https://makemytripback.herokuapp.com/hotels/${id}`)
      .then((r) => r.json())
      .then((r) => {
        dispatch(addHotelBooking(r));
        console.log(r);
      })
      .catch((e) => dispatch(hotelBookingError()));
    setTimeout(() => {
      // navigate(`/hotels/review/${_id}`);
      navigate(`/hotels/${_id}`);
    }, 1000);
  };
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className={style_c.container}>
          <div className={style_c.leftdiv}>
            <div className={style_c.bigimg}>
              <img
                onClick={() => getSingleHotel(_id)}
                src={cover}
                alt="not found"
              />
            </div>

            <div className={style_c.smallimg}>
              <img src={extraimageUrl[0]} alt="not found" />
              <img src={extraimageUrl[1]} alt="not found" />
              <img src={extraimageUrl[2]} alt="not found" />
            </div>
          </div>

          {/* middle */}
          <div className={style_c.middlediv}>
            {/* first */}
            <div className={style_c.first_div}>
              <span>{name}</span>

              <div className={style_c.rating}>
                <div className={style_c.icon_ratingdiv}>
                  <img src={mtripicon} alt="icon" />

                  <p className={style_c.rating_p}>
                    <span>{ratings}</span> /5{" "}
                    {ratings >= 4 ? "Good" : "Okay-ish"}
                  </p>
                </div>

                <p>
                  {" "}
                  <b>24</b> RATINGS
                </p>
              </div>
            </div>
            {/* second */}
            <div className={style_c.second_div}>
              <span>{location}</span>
            </div>
            {/* third */}
            <div className={style_c.third_div}>
              <span>{country}</span>
              <p>2 bedrooms | 2 beds |Cafe</p>
            </div>
            {/* fourth */}
            <div className={style_c.fourth_div}>
              <span>Couple Friendly</span>
            </div>
            {/* fifth */}
            <div className={style_c.fifth_div}>
              <b>Free Cancellation till check in</b>
            </div>
          </div>

          <div className={style_c.rightdiv}>
            <div></div>
            <div className={style_c.cost}>
              <p className={style_c.cutting_cost}> ₹ {price + 1000}</p>

              <span className={style_c.actuall_cost}> ₹ {price}</span>

              <p className={style_c.taxes_cost}> + 17 taxes & fees</p>

              <p className={style_c.romm_cost}>Per Night for 1 Room</p>
            </div>
          </div>
        </div>

        <div className={style_c.discount_container}>
          <span className={style_c.infoicon}>
            {" "}
            <AiOutlineInfoCircle />{" "}
          </span>

          <span className={style_c.discount_title}>
            Discount of INR 100 pre-applied on your 1st Homestay booking
          </span>
        </div>
      </div>
    </>
  );
};

export default Card;
