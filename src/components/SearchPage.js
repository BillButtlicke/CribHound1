import React from "react";
import "./SearchPage.css";
import SearchResult from "./SearchResult";
import { Button } from "@material-ui/core";

function SearchPage() {
  return (
    <div className="searchWebPage">
      <div className="searchWebPage__details">
        <p>Buy from 30 October to 20 November 2021!</p>
        <h1>Search</h1>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Place</Button>
      </div>
      <SearchResult
        img="https://media.gettyimages.com/photos/idyllic-home-with-covered-porchpicture-
id479767332?s=612x612"
        location="Madurai"
        name="Triptico Properties"
        price="Rs. 40,00,000"
      />
    </div>
  );
}

export default SearchPage;
