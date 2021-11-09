import React, { useContext, useEffect, useState, useCallback } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const comicsUrl =
    "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=d8f2d3193110c1144ecce70a33f3acda&hash=1e30cc74fe508db2f099dff643d5489d";

  const charactersUrl =
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d8f2d3193110c1144ecce70a33f3acda&hash=1e30cc74fe508db2f099dff643d5489d";
  const [comicsSearchTerm, setComicsSearchTerm] = useState("");
  const [characterSearchTerm, setCharacterSearchTerm] = useState("");
  const [comics, setComics] = useState([]);

  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [charactersCount, setCharactersCount] = useState(0);
  const [totalComics, setTotalComics] = useState(0);
  const [comicsCount, setComicsCount] = useState(0);

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const openMenu = () => {
    setMenuIsOpen(true)
  }

  const closeMenu = () => {
    setMenuIsOpen(false)
  }

  const extractPath = (start ,url) => {
    //search for the position of the string characters
    //then return the substring from the provided url starting from the character's position

    const position = url.search(start);
    const path = url.slice(position, url.length);
    return path;
  };

  //Characters
  const getCharacters = useCallback(async () => {
    const response = await fetch(charactersUrl);
    const fetchedCharacters = await response.json();
    
    setCharacters(fetchedCharacters.data.results);
    setTotalCharacters(fetchedCharacters.data.total);
    setCharactersCount(fetchedCharacters.data.count);
    setLoading(false);
  }, [charactersUrl]);

  useEffect(() => {
    setLoading(true);
    async function getSearchCharacters() {
      try {
        if (characterSearchTerm.length > 0) {
          const response = await fetch(
            `https://gateway.marvel.com/v1/public/characters?ts=1&nameStartsWith=${characterSearchTerm}&apikey=d8f2d3193110c1144ecce70a33f3acda&hash=1e30cc74fe508db2f099dff643d5489d`
          );
          const fetchedCharacters = await response.json();

          setCharacters(fetchedCharacters.data.results);
          setTotalCharacters(fetchedCharacters.data.total);
          setCharactersCount(fetchedCharacters.data.count);
          setLoading(false);
        } else {
          getCharacters()
        }
      } catch (error) {
        console.log(error);
      }

      
    }

    getSearchCharacters();
  }, [characterSearchTerm, getCharacters]);

  useEffect(() => {
    setLoading(true);
    try {
      getCharacters();
    } catch (error) {
      console.log(error);
      return <h1>Seems like there's an error, try again later</h1>;
    }
    
  }, [getCharacters]);

  //////////////////////////////////////

  //Comics
  const getComics = async () => {
    const response = await fetch(comicsUrl);
    const fetchedComics = await response.json();
    
    setComics(fetchedComics.data.results);
    setComicsCount(fetchedComics.data.count);
    setTotalComics(fetchedComics.data.total);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    async function getSearchComics() {
      try {
        if (comicsSearchTerm.length > 0) {
          const response = await fetch(
            `https://gateway.marvel.com/v1/public/comics?ts=1&titleStartsWith=${comicsSearchTerm}&apikey=d8f2d3193110c1144ecce70a33f3acda&hash=1e30cc74fe508db2f099dff643d5489d`
          );
          const fetchedComics = await response.json();

          setComics(fetchedComics.data.results);
          setTotalComics(fetchedComics.data.total);
          setComicsCount(fetchedComics.data.count);
          setLoading(false);
        } else {
          getComics();
        }
      } catch (error) {
        console.log(error);
      }

      
    }
    
    getSearchComics();
  }, [comicsSearchTerm]);

  useEffect(() => {
    setLoading(true);
    try {
      getComics();
      
    } catch (error) {
      console.log(error);
    }
    
  }, []);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        comics,
        setComics,
        characters,
        setCharacters,
        setComicsSearchTerm,
        totalCharacters,
        charactersCount,
        comicsSearchTerm,
        getComics,
        totalComics,
        comicsCount,
        characterSearchTerm,
        setCharacterSearchTerm,
        extractPath,
        openMenu,
        closeMenu,
        menuIsOpen
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const GlobalContext = () => {
  return useContext(AppContext);
};

export default GlobalContext;
