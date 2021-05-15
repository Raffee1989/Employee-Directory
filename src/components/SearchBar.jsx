import React from "react";
import "../styles/SearchBar.css";


const SearchBar = ({searchChanges}) => {
    return (
        <div className= "container searchbar justify-content-center navbar">
            <form className="form-inline ">
                <input className="form-control " type="search" placeholder="Search" onChange={e => searchChanges(e)}/>
            </form>
        </div>
    );
};

export default SearchBar;
