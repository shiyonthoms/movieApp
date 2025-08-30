import React from "react";
import { useState } from "react";
import '../styles/searchbar.css'


const SearchBar = ({searchTerm, setSearchTerm}) => {
    const getSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    return(
        <div className="search-bar">
            <div className="input-container">
            <input  className="search-input" type="text" placeholder="Search for a movie" onChange={getSearchTerm} value={searchTerm} />
        <img className="search-icon" src="./search.svg" alt="" />
        </div>
        </div>
    )

}

export default SearchBar