import React, { useState } from "react";

import Logo from "./Logo";
import Menu from "./Menu";

import "../../styled/header/header.scss";

const Header = () => {
  const [hover, setHover] = useState(false);

  return (
    <header className="header">
      <Logo hover={hover} />
      <Menu hover={hover} setHover={setHover} />
    </header>
  );
};

export default Header;
