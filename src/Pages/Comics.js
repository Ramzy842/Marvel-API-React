import React, { useEffect } from "react";
import Comic from "../Components/Comic";
import GlobalContext from "../Context";
import Loading from "../Components/Loading";

const Comics = () => {
  const {
    loading,
    comics,
    totalComics,
    comicsCount,
    setCharacterSearchTerm,
    comicsSearchTerm,
  } = GlobalContext();

  useEffect(() => {
    setCharacterSearchTerm("");
  }, [setCharacterSearchTerm]);
  

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (comicsSearchTerm.length === 0 && comics.length === 0) {
    return <Loading />;
  }

  return comics.length > 0 ? (
    <div className="comics">
      <header>
        <p className="total-comics">{totalComics} character found</p>
        <p className="comics-count">{comicsCount} comics displayed</p>
      </header>

      <section className="comics-view">
        {comics.map((result) => {
          const { id } = result;
          return <Comic key={id} {...result} />;
        })}
      </section>
    </div>
  ) : (
    <h1 className="no-comic-search">No comic matches your search</h1>
  );
};

export default Comics;
