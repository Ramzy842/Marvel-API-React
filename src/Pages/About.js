import React, { useEffect } from "react";
import GlobalContext from "../Context";
import { BsGithub } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import { FaReact } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";

const About = () => {
  const { setCharacterSearchTerm, setComicsSearchTerm } = GlobalContext();
  useEffect(() => {
    setCharacterSearchTerm("");
    setComicsSearchTerm("");
  }, [setCharacterSearchTerm, setComicsSearchTerm]);

  return (
    <div className="about">
      <div className="about-container">
        <h1>Marvomics is a portfolio project I made using ReactJS</h1>
        <p>
          Under the hood, Marvomics uses The Marvel API to search for the
          characters as well as the comics
        </p>
        <h2>
          <GrTechnology className="techs-logo" />
          Technologies used:
        </h2>
        <div className="technologies">
          <ul>
            <li>
              <FaReact className="react-logo tech-logo" />
              <span>ReactJS</span>
            </li>
            <li>
              <DiCss3 className="css-logo tech-logo" />
              <span>CSS</span>
            </li>
          </ul>
        </div>
        <div className="developer-links">
          <h2>My Github:</h2>
          <a
            href="https://github.com/Ramzy842"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="github-link " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
