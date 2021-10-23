import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

function SearchResult({ img, location, name, price }) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__details">
        <div className="searchResult__detailsTop">
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
        <div className="searchResult__detailsBottom">
          <div className="searchResult__price">
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
