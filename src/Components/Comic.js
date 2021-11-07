import React, { useRef } from "react";
import { Link } from "react-router-dom";
const Comic = ({
  id,
  title,
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
      className="comic-card"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="comic-details">
        <img
          ref={imageRef}
          src={`${thumbnail.path}/portrait_xlarge.${thumbnail.extension}`}
          alt={title}
        />
        <h1>{title}</h1>

        <Link to={`/comics/${id}`} className="comic-card-link" >View Info</Link>
      </div>
    </article>
  );
};

export default Comic;
