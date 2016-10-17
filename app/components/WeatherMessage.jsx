var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h4 className="text-center">In {location} the temperature is {temp} °C</h4>
        </div>
    )
};

module.exports = WeatherMessage;
