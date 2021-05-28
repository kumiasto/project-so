import React, { useEffect, useState, useContext } from "react";
import {
  MdKeyboardArrowLeft as Left,
  MdKeyboardArrowRight as Right,
} from "react-icons/md";

import { ColorContext } from "../../context/ColorContext";
import img1 from "../../assets/slide1-big.jpg";
import img2 from "../../assets/slide2-big.jpg";
import "../../styled/slider/slider.scss";

const Slider = () => {
  const images = [img1, img2];
  const [imageIndex, setImageIndex] = useState(0);
  const [active, setActive] = useState(true);
  const { black, setBlack } = useContext(ColorContext);
  let length = images.length;

  useEffect(() => {
    const sliderInterval = setTimeout(nextSlide, 5000);
    setBlack(!black);
    return () => clearTimeout(sliderInterval);
  }, [imageIndex]);

  function prevSlide() {
    setImageIndex(imageIndex === length - 1 ? imageIndex - 1 : length - 1);
  }

  function nextSlide() {
    setImageIndex(imageIndex === length - 1 ? 0 : imageIndex + 1);
  }

  const iconStyle = {
    fontSize: "2rem",
    cursor: "pointer",
  };

  const rightStyle = {
    fontSize: "1rem",
    color: `${black} ? "#fff: "#000""`,
  };

  return (
    <section className="slider">
      <div className={black ? "slider__img-text" : "slider__img-text white"}>
        <h1 className="slider__header">o.1</h1>
        <p className="slider__paragraph-one">
          {imageIndex === 0 ? "Bez kompromisu." : "Bez kompromisu."}
        </p>
        <p className="slider__paragraph-two">
          {imageIndex === 0
            ? "Idealnie tak jak lubisz."
            : "Najlepsze dla Ciebie."}
        </p>
        <p className="slider__paragraph-three">
          KEUNE <strong>DESIGN</strong>
        </p>
        <div className="slider__button-wrapper">
          <div className="slider__button-line"></div>
          <button className={black ? "slider__button" : "slider__button white"}>
            <Right style={rightStyle} />
          </button>
        </div>
      </div>
      <div className="slider__img-wrapper">
        <img
          src={images[0]}
          className={
            imageIndex === 0 ? "slider__img slider__img--active" : "slider__img"
          }
        />
        <img
          src={images[1]}
          className={
            imageIndex === 1 ? "slider__img slider__img--active" : "slider__img"
          }
        />
      </div>

      <div className={black ? "slider__nav" : "slider__nav white"}>
        <Left style={iconStyle} onClick={prevSlide} />
        <Right style={iconStyle} onClick={nextSlide} />
        <div className="slider__nav-controls">
          <div
            className={
              imageIndex === 0
                ? "slider__nav-circle"
                : "slider__nav-circle slider__nav-circle--active"
            }
            onClick={prevSlide}
          ></div>
          <div
            className={
              imageIndex === 1
                ? "slider__nav-circle"
                : "slider__nav-circle slider__nav-circle--active"
            }
            onClick={nextSlide}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
