import React, { useContext } from "react";

import { ColorContext } from "../../context/ColorContext";
import { ReactComponent as TwitterSvg } from "../../assets/twitter.svg";
import { ReactComponent as FacebookSvg } from "../../assets/fb.svg";
import { ReactComponent as YoutubeSvg } from "../../assets/yt.svg";
import { ReactComponent as InstaSvg } from "../../assets/insta.svg";
import "../../styled/header/social-media.scss";

const SocialMedia = ({ hover }) => {
  const { black } = useContext(ColorContext);

  return (
    <div className="social">
      <div className="social__wrapper">
        <a
          href="#"
          className={
            black && !hover
              ? "social__icon social__icon--margin-right"
              : "social__icon social__icon--margin-right color"
          }
        >
          <TwitterSvg className="social__icon-img" />
        </a>

        <div>
          <a
            href="#"
            className={black && !hover ? "social__icon" : "social__icon color"}
          >
            <FacebookSvg className="social__icon-img" />
          </a>
          <a
            href="#"
            className={black && !hover ? "social__icon" : "social__icon color"}
          >
            <InstaSvg className="social__icon-img" />
          </a>
        </div>
        <a
          href="#"
          className={black && !hover ? "social__icon" : "social__icon color"}
        >
          <YoutubeSvg className="social__icon-img social__icon--margin-left" />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
