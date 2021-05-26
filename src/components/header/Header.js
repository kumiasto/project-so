import React from "react";

import Logo from "./Logo";
import Menu from "./Menu";

import "../../styled/header/header.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
