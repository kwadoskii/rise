import React from "react";
import Button from "./Button";

const Search = () => {
  return (
    <div className="search-holder">
      <div className="input input-text">
        <input type="text" placeholder="Who are you looking for..." />
      </div>

      <div className="input input-cate">
        <label htmlFor="category">
          <select name="category" id="category">
            <option default value="">
              Categories
            </option>
          </select>
        </label>
      </div>

      <div className="input input-loc">
        <label htmlFor="location">
          <select name="location" id="location">
            <option default value="">
              Location
            </option>
          </select>
        </label>
      </div>

      <div className="input">
        <Button name="SEARCH" type="button" classes="xbtn search-btn" />
      </div>
    </div>
  );
};

export default Search;
