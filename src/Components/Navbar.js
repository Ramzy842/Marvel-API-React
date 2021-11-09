import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import GlobalContext from "../Context";

const Navbar = () => {
  const { menuIsOpen, closeMenu, openMenu } = GlobalContext();

  const refContainer = useRef(null);
  
  const [width, setWidth] = useState(document.body.getBoundingClientRect().width);
  
  useEffect(() => {
    
    const changeView = () => {
      
      setWidth(document.body.getBoundingClientRect().width);
      
    };

    window.addEventListener("resize", changeView);
    
    
    return () => window.removeEventListener("resize", changeView);
  }, [width]);

  useEffect(() => {
    if (width > 480 && (menuIsOpen || !menuIsOpen)) {
      refContainer.current.style.display = "flex";
    } else if (width <= 480) {
      if (menuIsOpen) {
        refContainer.current.style.display = "flex";
      } else if (menuIsOpen === false) {
        refContainer.current.style.display = "none";
      }
    }
  }, [width, menuIsOpen]);

  return (
    <nav style={{ paddingBottom: `${menuIsOpen ? "0" : "0.5rem"}` }}>
      <NavLink to="/" className="logo">
        <h1>Marvomics</h1>
      </NavLink>

      {menuIsOpen ? (
        <AiOutlineClose
          className="menu-icon"
          onClick={menuIsOpen ? closeMenu : openMenu}
        />
      ) : (
        <BiMenuAltRight
          className="menu-icon"
          onClick={menuIsOpen ? closeMenu : openMenu}
        />
      )}

      <ul ref={refContainer} className="links-list">
        <li>
          <NavLink
            exact
            activeStyle={{ background: "#ff1548" }}
            to="/"
            className="link-style"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeStyle={{ background: "#ff1548" }}
            to="/characters"
            className="link-style"
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeStyle={{ background: "#ff1548" }}
            to="/comics"
            className="link-style"
          >
            Comics
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            activeStyle={{ background: "#ff1548" }}
            to="/about"
            className="link-style"
          >
            About
          </NavLink>
        </li>
        <li className="github-item">
          <a
            href="https://github.com/Ramzy842"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="github-link" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
