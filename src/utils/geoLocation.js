const request = require('request')

const geoLocation = (cityName, callback) => {
    const apiKey = 'e05400c3ff94341c1f3356399dbc9db8';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=`+ encodeURIComponent(cityName)+`&appid=${apiKey}`;

    
    request({ url, json:true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined) 
        } else if (body.name === false) {
            callback('Try another search!', undefined) 
        } else {
            callback(undefined, {
                latitude : body.coord.lat,
                longitude : body.coord.lon,
                location : body.name
            })
        }
    })
}

module.exports=geoLocation