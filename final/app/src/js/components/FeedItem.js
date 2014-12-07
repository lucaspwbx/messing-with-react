/** @jsx React.DOM */
var React = require('React');

var FeedItem = React.createClass({
  render: function() {
    return (
      <li>
        <span>60</span>
        <h4>Javascript is fun</h4>
        <span>Lexical scoping FTW</span>
        <span>
          <button id="up">&uarr;</button>
          <button id="down">&darr;</button>
        </span>
      </li>
      );
  }
});

module.exports = FeedItem;
