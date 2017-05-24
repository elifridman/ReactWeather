var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
  onSearch:function(e){
    e.preventDefault();
    alert('not yet wired up');
  },
  render:function(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li>
              <IndexLink activeclassNameName = "active" activeStyle = {{fontWeight:'bold'}} to="/">Get Weather</IndexLink>
            </li>
            <li>
              <Link activeclassNameName = "active" activeStyle = {{fontWeight:'bold'}} to="/about">About</Link>
            </li>
            <li>
              <Link activeclassNameName = "active" activeStyle = {{fontWeight:'bold'}} to="/examples">Examples</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit = {this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Search Weather"/></li>
              <li><button type="submit" className="button">Get Weather</button></li>
            </ul>
          </form>
        </div>
  </div>
    );
  }
});

module.exports = Nav;
