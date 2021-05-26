import React, { useState, useContext, useEffect } from "react";
import { ColorContext } from "../../context/ColorContext";
import SocialMedia from "../header/SocialMedia";
import { MdViewHeadline, MdClose } from "react-icons/md";
import "../../styled/header/menu.scss";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const { black } = useContext(ColorContext);

  const iconStyle = {
    fontSize: "3rem",
    padding: "1vh",
    zIndex: "100",
    color: `${open ? "#000" : "#fff"}`,
  };

  function handleOpenMenu() {
    setOpen(!open);
  }
  function toggleHover() {
    setHover(!hover);
  }

  return (
    <>
      <div className="nav__mobile">
        {open ? (
          <MdClose onClick={handleOpenMenu} style={iconStyle} />
        ) : (
          <MdViewHeadline onClick={handleOpenMenu} style={iconStyle} />
        )}
      </div>
      <nav className={`nav ${open ? "nav--visible" : ""}`}>
        <ul className="nav__ul">
          <li>
            <a className={black ? "nav__a" : "nav__a white"} href="#">
              Nowości
            </a>
          </li>
          <li>
            <a
              className={
                black ? "nav__a nav__a--arrow" : "nav__a nav__a--arrow white"
              }
              href="#"
              onMouseEnter={toggleHover}
            >
              Produkty
            </a>
          </li>
          <li>
            <a className={black ? "nav__a" : "nav__a white"} href="#">
              Trendy
            </a>
          </li>
          <li>
            <a className={black ? "nav__a" : "nav__a white"} href="#">
              O firmie
            </a>
          </li>
          <li>
            <a className={black ? "nav__a" : "nav__a white"} href="#">
              Salony
            </a>
          </li>
          <li>
            <a className={black ? "nav__a" : "nav__a white"} href="#">
              Dystrybutorzy
            </a>
          </li>
          <li>
            <a className={black ? "nav__a" : "nav__a white"} href="#">
              Kontakt
            </a>
          </li>
        </ul>
        <SocialMedia />
      </nav>
      <div
        className={
          hover ? "nav__dropdown nav__dropdown--active" : "nav__dropdown"
        }
        onMouseLeave={toggleHover}
      >
        <div className="nav__dropdown-section-one">
          <p>Lorem ipsum</p>
          <p>Pellentesque iaculis</p>
          <p>Maecenas eu</p>
          <p>Ut pharetra</p>
        </div>
        <div className="nav__dropdown-section-two">
          <p>Curabitur ac</p>
          <p>Maecenas eu</p>
          <p>Praesent dictum</p>
          <p>Nullam dapibus</p>
        </div>
        <div className="nav__dropdown-section-three">
          <p>Maecenas eu</p>
          <p>Ut pharetra</p>
          <p>Lorem ipsum</p>
          <p>Morbi lacinia</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
