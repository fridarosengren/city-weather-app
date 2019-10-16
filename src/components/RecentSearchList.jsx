import React from 'react';

const RecentSearchList = ({ cities, clicked }) => {
    if (cities.length < 1) {
        return <div className="recent-search"><p>Det finns inga tidigare sökningar sparade</p></div>
    } else {
        return (
            <div className="recent-search"><h2>Senaste sökningarna</h2>
                <ul className="recent-search-list">
                    {cities.map((city, i) =>
                        <li key={i} onClick={clicked} data-id={city.city}>{city.city}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default RecentSearchList;