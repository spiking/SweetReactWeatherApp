var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4babc0afa5b9303da1ba2af533b0e9b3&units=metric';

// API-KEY
// 4babc0afa5b9303da1ba2af533b0e9b3

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location); // HTML encoding
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; // Query string

    return axios.get(requestUrl).then(function (err) {
      if (err.data.cod && err.data.message) {
        throw new Error(err.response.data.message);
      } else {
        return err.data.main.temp; // Everything worked, return temp
      }
    }, function (err)  {
      throw new Error(err.response.data.message);
    });
  }
}
