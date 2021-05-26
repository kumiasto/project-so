import React, { useContext } from "react";
import "../../styled/header/social-media.scss";
import twitter from "../../assets/twitter.svg";
import fb from "../../assets/fb.svg";
import yt from "../../assets/yt.svg";
import insta from "../../assets/insta.svg";
import { ColorContext } from "../../context/ColorContext";

const SocialMedia = () => {
  const { black } = useContext(ColorContext);

  return (
    <div className="social">
      <div className="social__wrapper">
        <a
          href="#"
          className={
            black
              ? "social__icon social__icon--margin-right"
              : "social__icon social__icon--margin-right white"
          }
        >
          <img className="social__icon-img" src={twitter} alt="twitter" />
        </a>

        <div>
          <a href="#" className={black ? "social__icon" : "social__icon white"}>
            <img className="social__icon-img" src={fb} alt="fb" />
          </a>
          <a href="#" className={black ? "social__icon" : "social__icon white"}>
            <img className="social__icon-img" src={insta} alt="insta" />
          </a>
        </div>
        <a href="#" className={black ? "social__icon" : "social__icon white"}>
          <img
            className="social__icon-img social__icon--margin-left"
            src={yt}
            alt="yt"
          />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
