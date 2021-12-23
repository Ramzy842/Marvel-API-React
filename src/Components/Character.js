import React, {useRef} from "react";
import { Link } from "react-router-dom";
import GlobalContext from "../Context";
const Character = ({
  id,
  name,
  thumbnail,
}) => {
  const { handleMouseOut, handleMouseOver} = GlobalContext()
  const imageRef = useRef(null);
  return (
    <article
      className="character-card"
      onMouseOver={() => handleMouseOver(imageRef)}
      onMouseOut={() => handleMouseOut(imageRef)}
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
