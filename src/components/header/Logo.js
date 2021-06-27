import React, { useContext } from "react";

import { ColorContext } from "../../context/ColorContext";
import { ReactComponent as LogoSvg } from "../../assets/logo_KEUNE.svg";
import "../../styled/header/logo.scss";

const Logo = ({ hover }) => {
  const { black } = useContext(ColorContext);

  return (
    <a className="logo" href="#">
      <LogoSvg className={black && !hover ? "logo__img" : "logo__img white"} />
    </a>
  );
};

export default Logo;
