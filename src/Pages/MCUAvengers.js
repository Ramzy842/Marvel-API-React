import React from "react";

import Loading from "../Components/Loading";
import GlobalContext from "../Context";
import MCUAvengersList from "../Data/MCUAvengersList";
import CategoryCharacter from "../Components/CategoryCharacter";
const MCUAvengers = () => {
  const { loading } = GlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mcu-characters">
      <h1 className="page-title">MCU Avengers</h1>
      <ul className="mcu-characters-list">
        <div className="characters-view">
          {MCUAvengersList.map((avenger) => {
            const { name, id, image, characterPath } = avenger;
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

export default MCUAvengers;
