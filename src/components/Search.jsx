import React, { useState } from 'react';
import Wiki from './Wiki'
import Weather from './Weather'
import Map from './Map'

const Search = () => {
    const [queryString, setQueryString] = useState(null);
    const [searchString, setSearchString] = useState(null);

    // Get value from text input field
    const handleChange = e => {
        setQueryString(e.target.value.toLowerCase());
    }

    // Set searchString state on submit form 
    const handleSubmit = e => {
        e.preventDefault();
        setSearchString(queryString);
    }

    return (
        <div>
            <form className="search-form" onSubmit={handleSubmit}>
                <label>Search: <input type="text" onChange={handleChange} /></label>
                <input type="submit" value="Submit" />
            </form>
            <Wiki city={searchString} />
            <Weather city={searchString} />
            <Map city={searchString} />
        </div>
    )
}

export default Search;