
var React = require('react');

// var WeatherMassage = React.createClass({
//   render:function(){
//     var{location,temp}  = this.props;
//     return(
//       <h4> The Weather In {location} is {temp} degree </h4>
//     );
//   }
// });

// var WeatherMassage = (props) =>{
//   var{location,temp}  = props;
//   return(
//     <h4> The Weather In {location} is {temp} degree </h4>
//   );
// }

var WeatherMassage = (location,temp) =>{
  return(
    <h4> The Weather In {location} is {temp} degree </h4>
  );
}
module.exports = WeatherMassage;
