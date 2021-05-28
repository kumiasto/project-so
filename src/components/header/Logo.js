import React, { useContext } from "react";

import { ColorContext } from "../../context/ColorContext";
import logo from "../../assets/logo_KEUNE.svg";
import "../../styled/header/logo.scss";

const Logo = ({ hover }) => {
  const { black } = useContext(ColorContext);

  console.log(hover);

  return (
    <a className="logo" href="#">
      <img
        src={logo}
        className={black && !hover ? "logo__img" : "logo__img white"}
      />
    </a>
  );
};

export default Logo;
