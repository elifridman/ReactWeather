var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMassage = require('WeatherMassage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState:function(){
    return{
      isLoading: false
    }
  },
  handleSearch:function(location){
    var that = this;
    debugger;
    this.setState({
      isLoading:true
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },function(errorMessage){
      that.setState({
        isLoading:false
      });
      alert(errorMessage);
    });

  },
  render: function () {
    var{isLoading,location,temp}  = this.state;
    function renderMesage(){
      if(isLoading){
        return <h3>fetching weather..</h3>;
      }else if (location&&temp) {
        return <WeatherMassage location = {location} temp = {temp}/>;
      }
    }
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/><br/>
        {renderMesage()}
      </div>

    )
  }
});

module.exports = Weather;
