import React from "react";
import Details from "./Details";
import Mmt from "./Mmt";
import Footer from "./Footer";
import style_Hs from "./Hotels.module.css";
import Qna from "./Qna";

const Hotels = () => {
  return (
    <>
      <div className={style_Hs.container}>
        <Mmt />

        <Details />

        <Qna />
        <Footer />
      </div>
    </>
  );
};

export default Hotels;
