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
        <button className="btn-shape btn-color">{props.btnname}</button>
      </form>
    </div>
  );
};

export default SearchForm;
