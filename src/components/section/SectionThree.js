import React from "react";
import { MdKeyboardArrowRight as Right } from "react-icons/md";
import "../../styled/section/section-three.scss";

const SectionThree = () => {
  return (
    <section className="section-three">
      <div className="section-three__left">
        <div className="section-three__left-wrapper">
          <h2 className="section-three__left-header">
            KEUNE <br />
            KOLORYZACJA
          </h2>

          <div className="section-three__left-content">
            <div className="section-three__left-line"></div>
            <p className="section-three__left-text">ODKRYJ SERIE</p>
            <div className="section-three__left-icon">
              <Right />
            </div>
          </div>
        </div>
      </div>
      <div className="section-three__right">
        <div className="section-three__right-wrapper">
          <h2 className="section-three__right-header">
            KEUNE <br />
            SO PURE
          </h2>
          <div className="section-three__right-content">
            <div className="section-three__right-line"></div>
            <p className="section-three__right-text">ODKRYJ SERIE</p>
            <div className="section-three__right-icon">
              <Right />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
