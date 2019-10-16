import React from 'react';

const SearchForm = ({ searchString, onSubmit, onChange }) => {
    return (
        <form className="search-form" onSubmit={onSubmit}>
            <input type="text" value={searchString} placeholder="Sök efter stad..." onChange={onChange} />
            <input type="submit" value="Sök" />
        </form>
    )
}

export default SearchForm;