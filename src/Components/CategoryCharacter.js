import React, { useRef } from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../Context";
const CategoryCharacter = ({ name, image, path }) => {
  const { handleMouseOut, handleMouseOver } = GlobalContext();
  const imageRef = useRef(null);
  return (
    <article
      className="character-card"
      onMouseOver={() => handleMouseOver(imageRef)}
      onMouseOut={() => handleMouseOut(imageRef)}
    >
      <div className="character-details">
        <img ref={imageRef} src={image} alt={name} />
        <h1>{name}</h1>

        <Link to={`/${path}`} className="character-card-link">
          View Info
        </Link>
      </div>
    </article>
  );
};

export default CategoryCharacter;
