import React from 'react';
import './header.css';
import { BiMenuAltRight } from "react-icons/bi";
import { useEffect, useState } from "react";

import OutsideClickHandler from "react-outside-click-handler";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && '-100%' };
    }
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="image.png" alt="logo" width={100} />
        <OutsideClickHandler onOutsideClick={() => {setMenuOpened(false)}}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="#residential" className="">Residential</a>
            <a href="#value" className="">Our Value</a>
            <a href="#contact" className="">Contact Us</a>
            <a href="" className="">Hire Tech</a>
            <button className='button'>
              <a href="" className="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
