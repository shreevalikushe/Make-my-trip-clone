import React from "react";
import stylef from "./FilterC.module.css";

const FilterC = () => {
  return (
    <>
      <div className={stylef.Fcontainer}>
        <h2>Select Filters</h2>
        {/*  City Filter */}
        <h4>Suggested For City</h4>
        <div
          className={stylef.suggestGoadiv}
          onChange={() => console.log("hi")}
        >
          {/* first */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>Delhi</span>
            </div>

            <div className={stylef.vlaue}>(15)</div>
          </div>

          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>Bengauru</span>
            </div>

            <div className={stylef.vlaue}>(15)</div>
          </div>

          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>Mumbai</span>
            </div>

            <div className={stylef.vlaue}>(15)</div>
          </div>
        </div>

        <h4>Suggested For You </h4>
        {/* First Filter div */}
        <div className={stylef.suggestGoadiv}>
          {/* first */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>Rated Excellent by Travellers</span>
            </div>

            <div className={stylef.vlaue}>(220)</div>
          </div>

          {/* second */}

          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>5 Star Properties</span>
            </div>

            <div className={stylef.vlaue}>(74)</div>
          </div>
          {/* third */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>North </span>
            </div>

            <div className={stylef.vlaue}>(2)</div>
          </div>
          {/* fourth */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>Resorts</span>
            </div>

            <div className={stylef.vlaue}>(321)</div>
          </div>
          {/* fifth */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>Airport Transfers Avilable</span>
            </div>

            <div className={stylef.vlaue}>(998)</div>
          </div>
          {/* sixth */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>South </span>
            </div>

            <div className={stylef.vlaue}>(2)</div>
          </div>
          {/* seventh */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>Free Cancellation</span>
            </div>

            <div className={stylef.vlaue}>(114)</div>
          </div>
          {/* eigth */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <img
                src="https://promos.makemytrip.com/Hotels_product/Contextual%20Filter/Icons/Homestay_big_icon.png"
                alt="not found"
                className={stylef.iconhome}
              />
              <span>Entire Property</span>
            </div>

            <div className={stylef.vlaue}>(389)</div>
          </div>
          {/* ninght */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>Swimming Pool</span>
            </div>

            <div className={stylef.vlaue}>(700)</div>
          </div>
          {/* tenth */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="" value="" />
              <img
                src="https://promos.makemytrip.com/Hotels_product/Contextual%20Filter/Icons/Homestay_big_icon.png"
                alt="not found"
                className={stylef.iconhome}
              />
              <span>Villas</span>
            </div>

            <div className={stylef.vlaue}>(20)</div>
          </div>
          {/* elevnth */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>Rated Excellent on Location</span>
            </div>

            <div className={stylef.vlaue}>(234)</div>
          </div>
          {/* twelth */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>Free Breakfast</span>
            </div>

            <div className={stylef.vlaue}>(800)</div>
          </div>
          {/* 13th */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>
                MMT Value Stays - Quality <br /> Budget Hotels
              </span>
            </div>

            <div className={stylef.vlaue}>(220)</div>
          </div>

          {/* Prize filter */}
          <h4>Price</h4>

          {/* 1 */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span> ₹ 0 - ₹ 1500 </span>
            </div>

            <div className={stylef.vlaue}></div>
          </div>
          {/*  2*/}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span> ₹ 1500 - ₹ 3000 </span>
            </div>

            <div className={stylef.vlaue}></div>
          </div>
          {/* 3 */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span> ₹ 3000 - ₹ 14500 </span>
            </div>

            <div className={stylef.vlaue}></div>
          </div>
          {/* 4 */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>₹ 14500 - ₹30000 </span>
            </div>

            <div className={stylef.vlaue}></div>
          </div>
          {/* 5 */}
          <div className={stylef.boxdiv}>
            <div className={stylef.checkboxdiv}>
              <input type="checkbox" name="vehicle1" value="Bike" />
              <span>₹ 30000+</span>
            </div>

            <div className={stylef.vlaue}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterC;
