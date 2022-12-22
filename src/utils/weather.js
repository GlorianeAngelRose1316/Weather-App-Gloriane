const request = require('request')

const weather = (latitude, longitude, callback) => {
    const apiKey = 'e05400c3ff94341c1f3356399dbc9db8';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=` + latitude + `&lon=` + longitude + `&appid=${apiKey}`;
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
          callback('Unable to connect to the weather service!', undefined);
        } else if (body.cod !== 200) {
          callback('Unable to find location!', undefined);
        } else {
          callback(undefined, body.wind.deg + ' is the wind speed.');
        }
      });
}

module.exports=weather
