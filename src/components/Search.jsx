import React, { useState, useEffect } from 'react'
import Wiki from './Wiki'
import Weather from './Weather'
import Map from './Map'
import RecentSearchList from './RecentSearchList'
import SearchForm from './SearchForm'
import Link from './common/Link'
import Text from './common/Text'
import { getWeatherData, getWikiData, getMapData } from '../api'

const Search = () => {
    const [searchString, setSearchString] = useState('')
    const [storedSearchData, setStoredSearchData] = useState()

    // State for API data
    const [weatherData, setWeatherData] = useState()
    const [wikiData, setWikiData] = useState()
    const [mapData, setMapData] = useState()

    // Temporary object for storing of search data
    const recentSearchData = {
        city: '',
        weather: {},
        maps: '',
        wiki: {}
    }

    // Get stored searches values from sessionStorage
    const getStoredSearches = () => {
        if ('cities' in sessionStorage) {
            let storedData = JSON.parse(sessionStorage.getItem('cities'))
            return storedData
        } else {
            return []
        }
    }

    // List of 5 recent searches state
    const [recentSearch, setRecentSearch] = useState(getStoredSearches)

    // Save recent search list when its updated
    useEffect(() => {

        setTimeout(() => {
            if (recentSearch.length > 0) {
                sessionStorage.setItem('cities', JSON.stringify(recentSearch))
            }
        }, 1000)

    }, [recentSearch])

    // Get data from API and set state
    const getApiData = () => {

        // Google maps
        getMapData(searchString).then(res => {
            setMapData(res)
            recentSearchData.maps = res
        })
        // Wiki
        getWikiData(searchString).then(res => {
            setWikiData(res)
            recentSearchData.wiki = res
        })
        // OpenWeather
        getWeatherData(searchString).then(res => {
            setWeatherData(res)
            recentSearchData.weather = res

        })

        recentSearchData.city = searchString
    }

    // Get text input from search form
    const handleChange = e => {
        setSearchString(e.target.value.toLowerCase())
    }

    const handleSubmit = e => {
        e.preventDefault()

        // Get api data and set state
        if (searchString !== '') getApiData()

        // Save recent search data
        if (searchString !== '') {
            // Remove 5th item from list
            if (recentSearch.length > 4) {
                let searches = getStoredSearches()
                let newArr = searches.slice(0, -1)
                setRecentSearch([recentSearchData, ...newArr])
            } else {
                setRecentSearch([recentSearchData, ...recentSearch])
            }
        }

        setStoredSearchData('') // Hide recent search list

        // Empty text input
        setSearchString('')
    }

    const handleClick = e => {
        // Get index of each item in stored search list
        let newIndex = storedSearchData.map(e => {
            return e.city
        }).indexOf(e.target.dataset.id)

        // Display saved data on click on specific saved city
        setWikiData(storedSearchData[newIndex].wiki)
        setWeatherData(storedSearchData[newIndex].weather)
        setMapData(storedSearchData[newIndex].maps)

        setStoredSearchData('') // Hide recent search list
    }

    // Show stored data on click without refetching from API
    const handleRecentClick = () => {
        setStoredSearchData(getStoredSearches())
    }

    return (
        <div className="container">
            <div className="header">
                <SearchForm searchString={searchString} onSubmit={handleSubmit} onChange={handleChange} />
                <Link className="recent-search-link" text={"Visa senaste sökningar"} onClick={handleRecentClick} />
            </div>

            {storedSearchData && <RecentSearchList cities={storedSearchData} clicked={handleClick} />}

            <main>
                <Text display={wikiData} text={"På denna sida kan du hämta värderdata och information om valfri stad i världen. Använd sökrutan ovan för att börja!"} />
                <div className="flex-container">
                    {wikiData && <Wiki data={wikiData} />}
                    {weatherData && <Weather data={weatherData} />}
                </div>

                {mapData && <Map data={mapData} />}
            </main>
        </div >
    )
}

export default Search;