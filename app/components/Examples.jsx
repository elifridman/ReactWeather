var React = require('react');
var {Link} = require('react-router');

var Examples = (props) =>{
  return (
    <div >
      <h1 className="text-center page-title">Examples</h1>
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
