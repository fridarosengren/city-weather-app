import React from 'react'

const Map = ({ data }) => {
    return (
        <div className="google-maps-container">
            <iframe
                title="test"
                width="600"
                height="450"
                frameBorder="0"
                src={data} allowFullScreen>
            </iframe>
        </div>
    )
}

export default Map