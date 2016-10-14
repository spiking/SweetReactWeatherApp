var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

// Container weather Component

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(location) {
        var that = this; // 'this' not reachable inside promise func below
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({location: location, temp: temp, isLoading: false});
        }, function(error) {
            that.setState({isLoading: false});
            alert(error);
        });
    },
    render: function() {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather data...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>; // If temp and location defined
            }
        }

        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/> {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;
