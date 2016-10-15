var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <div>
            <h4 className="text-center">City: {location}</h4>
            <h4 className="text-center">Temperature: {temp}</h4>
        </div>
    )
};

module.exports = WeatherMessage;
