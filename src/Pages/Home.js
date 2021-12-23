import React, { useEffect } from "react";

import { Link } from "react-router-dom";
import GlobalContext from "../Context";
import categories from "../Data/Categories";
const Home = () => {
  const { setComicsSearchTerm, setCharacterSearchTerm } = GlobalContext();
  useEffect(() => {
    setCharacterSearchTerm("");
    setComicsSearchTerm("");
  }, [setCharacterSearchTerm, setComicsSearchTerm]);

  const handleMouseOver = (e, color) => {
    e.target.style.background = color;
  };

  const handleMouseOut = (e) => {
    e.target.style.background = "#fff";
  };
  return (
    <>
      <div className="home">
        <div className="hero">
          <section>
            <h1>Welcome to Marvomics</h1>
            <div className="paragraphs">
              <p>Search your favorite marvel characters and comics.</p>
              <p>Powered By the Marvel API</p>
            </div>

            <div className="btns">
              <Link to="/characters" className="hero-link">
                Characters
              </Link>
              <Link to="/comics" className="hero-link">
                Comics
              </Link>
              <a href="#categories" className="hero-link">
                View Categories
              </a>
            </div>
          </section>
        </div>
        <div className="categories" id="categories">
          {categories.map((item, index) => {
            const { title, image, path, color } = item;

            return (
              <div key={index} className="mcu-avengers">
                <h2 style={{ background: `${color}`, zIndex: 2 }}>{title}</h2>
                <div className="mcu-avengers-content" style={{zIndex: 1}}>
                  <img
                    src={image}
                    style={{ boxShadow: `0px 2px 8px ${color}`,  }}
                    alt={title}
                  />
                  <Link
                    to={path}
                    onMouseOver={(e) => handleMouseOver(e, color)}
                    onMouseOut={(e) => handleMouseOut(e)}
                    className="avengers-link"
                  >
                    View More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
