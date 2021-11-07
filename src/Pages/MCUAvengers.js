import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import GlobalContext from "../Context";
import MCUAvengersList from "../Data/MCUAvengersList";

const MCUAvengers = () => {
  const { loading } = GlobalContext();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="mcu-characters">
      <h1 className="page-title" >Top MCU characters</h1>
      <ul className="mcu-characters-list">
        <div className="characters-view">
          {MCUAvengersList.map((avenger) => {
            const { name, id, image, characterPath } = avenger;
            return (
              <div key={id} className="character-card">
                <div className="character-details">
                  <img src={image} alt={name} />
                  <h1>{name}</h1>
                  <Link
                    to={`/${characterPath}`}
                    className="character-card-link"
                  >
                    View Info
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default MCUAvengers;
