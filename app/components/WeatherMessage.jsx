var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">The weather is {temp}&deg;F in {location}</h3>
  )
};

module.exports = WeatherMessage;