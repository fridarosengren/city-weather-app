import React, { useState, useEffect } from 'react';
import APIKey from '../config/keys';

const Map = ({ city }) => {
    const [googleMaps, setGoogleMaps] = useState();

    // Call google maps API
    useEffect(() => {
        const URL = `https://www.google.com/maps/embed/v1/place?key=${APIKey.googleMaps}&q=${city}`
        city && setGoogleMaps(URL)
    }, [city]) // Only run when city value changes

    return (
        <iframe
            title="test"
            width="600"
            height="450"
            frameBorder="0"
            src={googleMaps} allowFullScreen>
        </iframe>
    )
}

export default Map;