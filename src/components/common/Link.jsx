import React from 'react';

const Link = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
}

export default Link;