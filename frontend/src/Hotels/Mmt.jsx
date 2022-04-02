import React from "react";
import style_m from "./Mmt.module.css";
const Mmt = () => {
  return (
    <>
      <div className={style_m.container}>

        <div className={style_m.bigcard}>

          <div className={style_m.title}>
            <h4> INTRODUCING </h4>
            <h1>MMT Luxe</h1>
            <h1>Selections</h1>
            <p>
              Escape to the epitome of luxury, packed <br />
              With signature amenities and services
            </p>
            <button>Learn More</button>
          </div>

          <div className={style_m.cardsdiv}>
          
            <div className={style_m.smallcard}>
              <img
                src="https://promos.makemytrip.com/Hotels_product/Luxe/brands.png"
                alt="not found"
                
              />
                <div className={style_m.titleCard}>
                <h2>Discover by Brands</h2>
              <p>Taj, Marriott,Oberoi,Hyatt & <br /> Mor  </p>
                </div>
             

            </div>

            <div className={style_m.smallcard}>
              <img
                src="https://promos.makemytrip.com/altacco_luxe/imgs/luxe_villa.jpg"
                alt="not found"
              />
              <div className={style_m.titleCard}>
              <h2>Luxe Vilas</h2>
              <p>Premimu Villas with Superlative <br /> Experience</p>
              </div>
             
            </div>

            <div className={style_m.smallcard}>
              <img
                src="https://promos.makemytrip.com/Hotels_product/Luxe/themes.png"
                alt="not found"
              />
               <div className={style_m.titleCard}>
               <h2>Discover by Themes</h2>
              <p>Explore Luxury Stays based on <br /> your interest </p>
               </div>
             
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
};

export default Mmt;
