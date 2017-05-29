
var React = require('react');

var WeatherMassage = ({location,temp}) =>{
  return(
    <h4 className="text-center"> The Weather In {location} is {temp} degree </h4>
  );
}
module.exports = WeatherMassage;
