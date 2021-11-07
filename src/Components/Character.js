import React, { useRef } from "react";
import { Link } from "react-router-dom";
const Character = ({
  id,
  name,
  thumbnail,
}) => {
  const imageRef = useRef(null);
  const handleMouseOver = (e) => {
    imageRef.current.classList.add("scalup-img");
  };
  const handleMouseOut = () => {
    imageRef.current.classList.remove("scalup-img");
  };
  return (
    <article
      className="character-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="character-details">
        <img
          ref={imageRef}
          src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
          alt={name}
        />
        <h1>{name}</h1>

        <Link to={`/characters/${id}`} className="character-card-link"  >View Info</Link>
      </div>
    </article>
  );
};

export default Character;
