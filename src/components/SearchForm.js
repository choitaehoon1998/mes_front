import React from "react";

const SearchForm = (props) => {
  return (
    <div>
      <form>
        <label htmlFor="firstInput">{props.title}</label>
        <input
          id="firstInput"
          onChange={(e) => props.onchangeFunction(e.target.value)}
          className="searchbox"
        ></input>
      </form>
    </div>
  );
};

export default SearchForm;
