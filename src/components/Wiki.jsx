import React from 'react';

const Wiki = ({ data }) => {
    // Check if weather data exists
    if (data.extract !== undefined) {
        return (
            <div className="flex-item">
                <h2>Om {data.title}:</h2>
                <p>{data.extract}</p>
            </div>
        )
    } else {
        return <div className="flex-item"><p>{data.message}</p></div>
    }
}

export default Wiki;