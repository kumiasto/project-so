import React from "react";
import "../../styled/section/section-two.scss";
import { MdKeyboardArrowRight as Right } from "react-icons/md";

const SectionTwo = () => {
  return (
    <section className="section-two">
      <div className="section-two__left">
        <div className="section-two__left-wrapper">
          <h2 className="section-two__left-header">
            KEUNE
            <br /> DESIGN
          </h2>
          <div className="section-two__left-content">
            <div className="section-two__left-line"></div>
            <p className="section-two__left-text">ODKRYJ SERIE</p>
            <div className="section-two__left-icon">
              <Right />
            </div>
          </div>
        </div>
      </div>
      <div className="section-two__right">
        <div className="section-two__right-wrapper">
          <h2 className="section-two__right-header">
            KEUNE <br />
            BLEND
          </h2>
          <div className="section-two__right-content">
            <div className="section-two__right-line"></div>
            <p className="section-two__right-text">ODKRYJ SERIE</p>
            <div className="section-two__right-icon">
              <Right />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
