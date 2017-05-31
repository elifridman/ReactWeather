var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMassage = require('WeatherMassage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
  getInitialState:function(){
    return{
      isLoading: false
    }
  },
  handleSearch:function(location){
    debugger;
    var that = this;
    this.setState({
      isLoading:true,
      errorMessage:undefined
    });
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        location:location,
        temp:temp,
        isLoading:false
      });
    },function(e){
      that.setState({
        isLoading:false,
        errorMessage:e.message
      });
    });

  },
  render: function () {
    var{isLoading,location,temp,errorMessage}  = this.state;
    function renderMesage(){
      if(isLoading){
        return <h3 className="text-center">fetching weather..</h3>;
      }else if (location&&temp) {
        return <WeatherMassage location = {location} temp = {temp}/>;
      }
    }
    function renderError(){
      if(typeof errorMessage !=='undefined'){
        return(
          <ErrorModal message ={errorMessage}/>
        )
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/><br/>
        {renderMesage()}
        {renderError()}
      </div>

    )
  }
});

module.exports = Weather;
