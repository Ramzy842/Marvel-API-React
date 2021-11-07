import React from "react";
import { NavLink } from "react-router-dom";
import {BsGithub} from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
      <NavLink  to="/" className="logo">
        <h1>Marvomics</h1>
      </NavLink>

      <ul className="links-list">
      <li>
          <NavLink exact activeStyle={{background: '#ff1548'}} to="/" className="link-style">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{background: '#ff1548'}} to="/characters" className="link-style">
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{background: '#ff1548'}} to="/comics" className="link-style">
            Comics
          </NavLink>
        </li>
        <li>
          <NavLink exact activeStyle={{background: '#ff1548'}} to="/about" className="link-style">
            About
          </NavLink>
        </li>
        <li>
          <a href="https://github.com/Ramzy842" target="_blank" rel="noreferrer" >
            <BsGithub className="github-link"/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
