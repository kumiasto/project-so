import React, { useContext } from "react";
import "../../styled/header/logo.scss";
import logo from "../../assets/logo_KEUNE.svg";
import { ColorContext } from "../../context/ColorContext";

const Logo = () => {
  const { black } = useContext(ColorContext);

  return (
    <a className="logo" href="#">
      <img src={logo} className={black ? "logo__img" : "logo__img white"} />
    </a>
  );
};

export default Logo;
