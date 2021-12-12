import React from "react";

const SearchContacts = ({searchInput, changeSearchInput}) =>{
    return(
        <section className="search-section">
        <label htmlFor="name">Pretraži imenik: </label>
        <input 
        className="search-input" 
        name="name" id="name" 
        onChange={changeSearchInput}
        value={searchInput}/>
        </section>
    )
}

export default SearchContacts;