var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

// Container weather Component

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(location) {
        var that = this; // 'this' not reachable inside promise func below
        this.setState({isLoading: true, errorMessage: undefined, location: undefined, temp: undefined});

        openWeatherMap.getTemp(location).then(function(temp) {
            that.setState({location: location, temp: temp, isLoading: false}); // Set state
        }, function(e) {
            that.setState({isLoading: false, errorMessage: e.message});
        });
    },
    componentDidMount: function() { // Invoked once, only on the client, immediately after the initial rendering occurs
        var location = this.props.location.query.location; // Extract from URL

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/'; // Root
        }
    },
    componentWillReceiveProps: function(newProps) { // Called anytime the components props is updated
        var location = newProps.location.query.location; // Extract from URL

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/'; // Root
        }
    },
    render: function() {
        var {isLoading, temp, location, errorMessage} = this.state;

        // debugger;
        function renderMessage() {
            if (isLoading) {
                return <h4 className="text-center">Fetching weather data...</h4>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>; // If temp and location defined
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (<ErrorModal message={errorMessage}/>)
            }
        }

        return (
            <div>
                <h2 className="text-center page-title">Global Weather Fetcher</h2>
                <hr></hr>
                <WeatherForm onSearch={this.handleSearch}/> {renderMessage()}
                {renderError()}
            </div>
        )
    }
});

module.exports = Weather;
