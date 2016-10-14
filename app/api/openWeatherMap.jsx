var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4babc0afa5b9303da1ba2af533b0e9b3&units=metric';

// API-KEY
// 4babc0afa5b9303da1ba2af533b0e9b3

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location); // HTML encoding
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; // Query string

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Eroor(res.data.message);
      } else {
        return res.data.main.temp; // Everything worked, return temp
      }
    }, function (res)  {
      throw new Error(res.data.message);
    });
  }
}
