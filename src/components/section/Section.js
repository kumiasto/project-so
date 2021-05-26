import React from "react";
import SectionOne from "../section/SectionOne";
import SectionTwo from "../section/SectionTwo";
import SectionThree from "../section/SectionThree";
import "../../styled/section/section.scss";

const Section = () => {
  return (
    <main className="section">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </main>
  );
};

export default Section;
