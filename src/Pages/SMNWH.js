import React from "react";

import Loading from "../Components/Loading";
import GlobalContext from "../Context";
import SMNWH_Characters from "../Data/SMNWH_Characters";
import CategoryCharacter from "../Components/CategoryCharacter";

const SMNWH = () => {
  const { loading } = GlobalContext();

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mcu-characters">
      <h1 className="page-title">Spider-Man No Way Home Characters</h1>
      <ul className="mcu-characters-list">
        <div className="characters-view">
          {SMNWH_Characters.map((character) => {
            const { name, id, image, characterPath } = character;
            return (
              <CategoryCharacter
                key={id}
                id={id}
                name={name}
                path={characterPath}
                image={image}
              />
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default SMNWH;
