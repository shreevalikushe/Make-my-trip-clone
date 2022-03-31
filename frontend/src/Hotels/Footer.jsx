import React from "react";
import style_f from "./Footer.module.css";

import { FaTwitter } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
  return (
    <>

      <div className={style_f.container}>
        <div className={style_f.f_icon}>

          <a href="https://twitter.com/makemytrip/">  <FaTwitter className={style_f.twitter} /></a>

          <a href="https://www.facebook.com/makemytrip/"> <FaFacebookF className={style_f.facebook} /> </a>

        </div>

        <div className={style_f.f_cright}>

          <span className={style_f.copyright}> © 2022 MAKEMYTRIP PVT. LTD.</span>
          <span className={style_f.counteryName} >  Country
            <a href="https://www.makemytrip.com/" className={style_f.country}>India</a>
            <a href="https://www.makemytrip.com/" className={style_f.country} >USA</a>
            <a href="https://www.makemytrip.com/" className={style_f.country}>UAE</a>

          </span>

        </div>
      </div>
    </>
  );
};

export default Footer;
