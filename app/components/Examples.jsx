var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example cities to try out:</p>
            <ul>
                <li>
                    <Link to='/?location=Lund'>Lund, Sweden</Link>
                </li>
                <li>
                    <Link to='/?location=New York'>New York, USA</Link>
                </li>
                <li>
                    <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
                </li>
            </ul>
        </div>
    )
};

module.exports = Examples;
