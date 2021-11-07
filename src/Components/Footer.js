import React from "react";
import {BsGithub} from "react-icons/bs"
const Footer = () => {
  return (
    <p className="footer">
      Made by Ramzi Chahbani
      <a href="https://github.com/Ramzy842" target="_blank" rel="noreferrer">
        <BsGithub className="github-link-footer" />
      </a>
    </p>
  );
};

export default Footer;
