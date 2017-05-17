var React = require('react');
var WeatherForm = React.createClass({
  onFormSubmit:function(e){
    e.preventDefault();
    var location = this.refs.city.value;
    if(location.length>0){
      this.refs.city.value = '';
      this.props.onSearch(location);
    }
  },
  render:function(){
      return(
        <div>
          <form onSubmit={this.onFormSubmit}>
           <input type="text" ref="city"/>
           <button>Get Weather</button>
         </form>
       </div>
      );
  }
});

module.exports = WeatherForm;
