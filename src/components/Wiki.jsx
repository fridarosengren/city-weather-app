import React, { useState, useEffect } from 'react';

const Wiki = ({ city }) => {
    const [summary, setSummary] = useState()

    // Call wiki API
    useEffect(() => {
        const URL = `https://sv.wikipedia.org/api/rest_v1/page/summary/${city}`
        city && fetch(URL).then(res => res.json()).then(
            data => {
                setSummary(data.extract)
            },
            error => {
                console.log(error)
            }
        )
    }, [city]) // Only run when city value changes

    return <p>{summary}</p>
}

export default Wiki;