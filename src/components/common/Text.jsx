import React from 'react';

const Text = ({ text, display }) => {
    if (!display) {
        return (
            <p>{text}</p>
        )
    } else {
        return null
    }
}

export default Text;