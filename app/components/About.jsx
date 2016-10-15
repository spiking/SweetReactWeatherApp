var React = require('react');

 // Arrow function possible, presentatioanl comp, only rendering

var About = (props) => {
    return (
        <div>
            <h3>About</h3>
            <p>This is my Sweet React Weather App. The purpose of this app is to learn more about React. So far so good. More styling coming soon. Stay tuned or something.</p>
            <h5>
              Tools used for this beauty:
            </h5>
            <ul>
              <li><a href="https://openweathermap.org/api">Open Weather Map</a> - The API used to fetch updated weather data.</li>
              <li><a href="https://atom.io">Atom</a> - The fabulous and customizable editor from Github.</li>
              <li><a href="https://en.wikipedia.org/wiki/Coffee">Metabolic Boost</a> - Energy from the gods. Or nature.</li>
            </ul>
        </div>
    )
};

module.exports = About;
