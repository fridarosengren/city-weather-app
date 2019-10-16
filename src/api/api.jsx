import APIKey from '../config/keys'

export const getWeatherData = city => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=se&APPID=${APIKey.weather}`;
    return city && fetch(URL).then(res => res.json()).then(
        data => {
            if (data.main) {
                return data
            } else {
                return { message: "Väderinformation saknas" }
            }
        },
        error => {
            console.log(error)
        }
    )
}
export const getWikiData = city => {
    const URL = `https://sv.wikipedia.org/api/rest_v1/page/summary/${city}`
    return city && fetch(URL).then(res => res.json()).then(
        data => {
            if (data.extract) {
                return data
            } else {
                return { message: "Information om staden saknas" }
            }
        },
        error => {
            console.log(error)
        }
    )
}
export const getMapData = city => {
    return new Promise((resolve, reject) => {
        resolve(`https://www.google.com/maps/embed/v1/place?key=${APIKey.googleMaps}&q=${city}`)
        reject("error")
    })
}