import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../Components/Loading";
import GlobalContext from "../Context";

const SingleCharacter = () => {
  const { id } = useParams();
  const {
    setLoading,
    loading,
    /* setCharacterSearchTerm,
    setComicsSearchTerm, */
    extractPath,
  } = GlobalContext();
  const characterUrl = `https://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=d8f2d3193110c1144ecce70a33f3acda&hash=1e30cc74fe508db2f099dff643d5489d`;

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getCharacter() {
      try {
        const data = await fetch(characterUrl);
        const response = await data.json();

        if (response) {
          setCharacter(response.data.results[0]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getCharacter();
  }, [characterUrl, setLoading]);

  /* useEffect(() => {
    setCharacterSearchTerm("");
    setComicsSearchTerm("");
  }, [setCharacterSearchTerm, setComicsSearchTerm]); */

  if (loading) {
    return <Loading />;
  }

  if (!character) {
    return <h1>Character not found</h1>;
  }

  const { name, comics, description, thumbnail, urls } = character;

  return (
    <>
      <article className="single-character">
        <div className="single-character-details">
          <img
            src={`${thumbnail.path}/portrait_incredible.${thumbnail.extension}`}
            alt=""
          />
          <div>
            <hgroup>
              <h3 className="title">
                Name: <span className="title-content">{name}</span>
              </h3>
              <h3 className="title description">
                Description:
                {description ? (
                  <span className="title-content ">{description}</span>
                ) : (
                  <span className="title-content">No description present</span>
                )}
              </h3>
            </hgroup>
            <h3 className="title">Info:</h3>
            <ul className="urls">
              {urls.map((singleUrl, index) => {
                const { url, type } = singleUrl;
                return (
                  <li key={index} className="info-link">
                    <a href={url}>{type}</a>
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to="/characters" className="back-to-characters">
            Back To Characters
          </Link>
        </div>
        <div className="character-comics">
          <h3 className="title">Comics:</h3>
          <ul className="character-comics-list">
            {comics.items.length > 0 ? (
              comics.items.map((item, index) => {
                const { name, resourceURI } = item;
                return (
                  <li key={index}>
                    <Link
                      to={`/${extractPath("comics", resourceURI)}`}
                      className="character-link"
                    >
                      {name}
                    </Link>
                  </li>
                );
              })
            ) : (
              <h3 className="title-content">
                Character did not participate in any comics
              </h3>
            )}
          </ul>
        </div>
      </article>
    </>
  );
};

export default SingleCharacter;
