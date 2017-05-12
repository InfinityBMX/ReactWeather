var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built in React. It gets live weather.</p>
      <p><a href="https://github.com/InfinityBMX/ReactWeather">GitHub repository</a></p>
    </div>
  )
};

module.exports = About;