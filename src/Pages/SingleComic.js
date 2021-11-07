import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../Components/Loading";
import GlobalContext from "../Context";

const SingleComic = () => {
  const { id } = useParams();
  const { loading, setLoading, /* setCharacterSearchTerm, setComicsSearchTerm, */ extractPath } =
    GlobalContext();
  const comicUrl = `https://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=d8f2d3193110c1144ecce70a33f3acda&hash=1e30cc74fe508db2f099dff643d5489d`;
  const [comic, setComic] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function getComic() {
      try {
        const data = await fetch(comicUrl);
        const comic = await data.json();

        if (comic) {
          setComic(comic.data.results[0]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getComic();
  }, [id, setLoading, comicUrl]);

  /* useEffect(() => {
    setCharacterSearchTerm("");
    setComicsSearchTerm("");
  }, [setCharacterSearchTerm, setComicsSearchTerm]); */

  

  if (loading) {
    return <Loading />;
  }

  if (!comic) {
    return <h1>Comic not found</h1>;
  }

  const { title, images, characters, description, series } = comic;
  

  return (
    <article className="single-character">
      <div className="single-character-details">
        {images.length > 0 && (
          <img
            src={`${images[0].path}/portrait_incredible.${images[0].extension}`}
            alt=""
          />
        )}

        {images.length === 0 && (
          <h1 className="no-image">No image to display</h1>
        )}
        <div>
          <hgroup>
            <h3 className="title">
              Title: <span className="title-content">{title}</span>
            </h3>
            <h3 className="title description">
              Description:
              {description ? (
                <span className="title-content ">{description}</span>
              ) : (
                <span className="title-content">No description present</span>
              )}
            </h3>
            <h3 className="title">
              Characters:{" "}
              {characters.items.length > 0 ? (
                <ul className="characters-list">
                  {characters.items.map((item, index) => {
                    return (
                      <li key={index}>
                        <Link
                          className="character-link"
                          to={`/${extractPath("characters",item.resourceURI)}`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <span className="title-content">No characters available</span>
              )}
            </h3>
            <h3 className="title">
              Series: <span className="title-content">{series.name}</span>{" "}
            </h3>
          </hgroup>
        </div>
        <Link to="/comics" className="back-to-characters">
          Back To Comics
        </Link>
      </div>
    </article>
  );
};

export default SingleComic;
