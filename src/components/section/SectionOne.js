import React from "react";
import "../../styled/section/section-one.scss";
import { MdKeyboardArrowRight as Right } from "react-icons/md";

const SectionOne = () => {
  return (
    <section className="section-one">
      <div className="section-one__left">
        <div className="section-one__left-header">
          <h2 className="section-one__left-header__h2">o2.</h2>
          <h3 className="section-one__left-header__h3">
            MARKI
            <br /> KEUNE
          </h3>
        </div>
      </div>
      <div className="section-one__right">
        <div className="section-one__right-wrapper">
          <h2 className="section-one__right-header">
            KEUNE
            <br /> CARE
          </h2>
          <div className="section-one__content">
            <div className="section-one__right-line"></div>
            <p className="section-one__right-text">ODKRYJ SERIE</p>
            <div className="section-one__right-icon">
              <Right />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
