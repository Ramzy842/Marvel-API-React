import React, { useEffect, useRef } from "react";
import GlobalContext from "../Context";
const ComicSearchForm = () => {
  const { setComicsSearchTerm, comicsSearchTerm } = GlobalContext();
  const refContainer = useRef(null)
  const handleChange = (e) => {
    e.preventDefault();
    setComicsSearchTerm(refContainer.current.value);
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
        value={comicsSearchTerm}
        type="text"
        placeholder="Enter a comic's title"
        style={{ width: "500px", height: "40px", fontSize: "1.4rem" }}
      />
    </form>
  );
};

export default ComicSearchForm;
