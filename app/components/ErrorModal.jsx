var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

// Popup alert
var ErrorModal = React.createClass({
    getDefaultProps: function() {
        return {title: 'Error'};
    },
    propTypes: { // Specify prop type, ensure component used correctly
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function() {
        var {title, message} = this.props;
        var modalMarkup = (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                {/* <h4>{title}</h4>
              <p>{message}</p> */}
              <h4>Error</h4>
              <p>The city you entered does not exist!</p>
                <p>
                    <button className="button hollow" data-close="">
                        Ok
                    </button>
                </p>
            </div>
        );
        // Foundation changes the DOM, react dont like it
        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);


        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        var {title, message} = this.props;

        return (
            <div></div>
        )

    }
});

module.exports = ErrorModal;
