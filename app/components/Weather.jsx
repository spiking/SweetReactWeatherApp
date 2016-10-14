var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

// Container weather Component

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: "New York",
      temp: 32
    }
  },
  handleSearch: function (location) {
    var that = this; // 'this' not reachable inside promise func below

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp
      });
    }, function (error) {
      alert(error);
    });
  },
    render: function() {
      var {temp, location} = this.state;
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        )
    }
});

module.exports = Weather;
