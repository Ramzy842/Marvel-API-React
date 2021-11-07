import React , {useEffect} from "react";
import GlobalContext from "../Context";
import Character from "../Components/Character";
import Loading from "../Components/Loading";

const Characters = () => {
  const {
    loading,
    characters,
    totalCharacters,
    charactersCount,
    setComicsSearchTerm,
    characterSearchTerm
  } = GlobalContext();
  useEffect(() => {
    setComicsSearchTerm("");
  }, [setComicsSearchTerm]);

  useEffect(() => {
    <Loading />
  }, [])

  if (loading) {
    
    return (
      <>
        <Loading />
      </>
    );
  }

  if (characterSearchTerm.length === 0 && characters.length === 0) {
    return <Loading />;
  }

  return characters.length > 0 ? (
    <div className="characters">
      <header>
        <p className="total-characters">{totalCharacters} character found</p>
        <p className="characters-count">
          {charactersCount} characters displayed
        </p>
      </header>

      <section className="characters-view">
        {characters.map((result) => {
          const { id } = result;
          return <Character key={id} {...result} />;
        })}
      </section>
    </div>
  ) : (
    <h1 className="no-character-search">No character matches your search</h1>
  );
};

export default Characters;
