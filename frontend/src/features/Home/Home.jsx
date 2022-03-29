import React from "react";
import { SimpleSlider } from "../../Components/SimpleSlider";
import { CarousalUI } from "../../Components/CarousalUI";
import { FlightsCard } from "../../Components/FlightsCard";
import  FlightHome  from "../../Components/FlightHome";
import Qna from "../../Hotels/Qna"
import Details from "../../Hotels/Details"

import Footer from "../../Hotels/Footer"
import styles from "./home.module.css";
export const Home = () => {
  return (
    <>
    <FlightHome />
  
    <div className={styles.container}>
      
      <SimpleSlider />
      <div style={{ marginTop: 50 }}>
        <CarousalUI />
      </div>
      <div style={{ marginTop: 50, paddingLeft: 100, paddingRight: 100 }}>
        <img
          src="https://mmt.servedbyadbutler.com/getad.img/;libID=3405582"
          style={{ width: "100%", height: "80%" }}
        />
      </div>
      <div style={{ marginTop: 50 }}>
        <FlightsCard />
      </div>
    </div>
    <div className={styles.container}>
      
      <SimpleSlider />
      <div style={{ marginTop: 50 }}>
        <CarousalUI />
      </div>
      <div style={{ marginTop: 50, paddingLeft: 100, paddingRight: 100 }}>
        <img
          src="https://mmt.servedbyadbutler.com/getad.img/;libID=3405582"
          style={{ width: "100%", height: "80%" }}
        />
      </div>
      <div style={{ marginTop: 50 }}>
        <FlightsCard />
      </div>
      
      
    </div>
    <Details/>
    <Qna/>
    <Footer/>

      </>
  );
};
