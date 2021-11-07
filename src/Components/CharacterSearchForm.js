import React, { useEffect, useRef } from "react";
import GlobalContext from "../Context";
const CharacterSearchForm = () => {
  const { setCharacterSearchTerm, characterSearchTerm } = GlobalContext();
  const refContainer = useRef(null)
  const handleChange = (e) => {
    e.preventDefault();
    setCharacterSearchTerm(refContainer.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
  };
  useEffect(() => {
    refContainer.current.focus()
  }, [])
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        ref={refContainer}
        onChange={handleChange}
        value={characterSearchTerm}
        type="text"
        placeholder="Enter a character's name"
        style={{ width: "500px", height: "40px", fontSize: "1.4rem" }}
      />
    </form>
  );
};

export default CharacterSearchForm;
