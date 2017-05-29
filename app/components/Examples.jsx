var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples Component</h3>
//     )
//   }
// });
//
// var Examples = function(props){
//   return (
//     <h3>Examples Component</h3>
//   )
// };

var Examples = (props) =>{
  return (
    <div >
      <h1 className="text-center">Examples</h1>
      <p>check our locations examples</p>
      <ol>
        <li>
             <Link to='/?location=Philadelphia'>Philadelphia, PA</Link>
        </li>
        <li>
           <Link to='/?location=Rio'>Rio, Brazil</Link>
        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
