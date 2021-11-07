import React from "react";

const HomeSearchForm = () => {
  return (
    <form className="search-form">
      <input
        type="text"
        placeholder="Enter a character's name or a comic's title"
        style={{ width: "500px", height: "40px", fontSize: "1.4rem"}}
      />
    </form>
  );
};

export default HomeSearchForm;
