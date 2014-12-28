/** @jsx React.DOM */
var React = require('React');

var FeedItem = React.createClass({
  render: function() {
    return (
      <li>
        <span>{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span>
          <button id="up">&uarr;</button>
          <button id="down">&darr;</button>
        </span>
      </li>
      );
  }
});

module.exports = FeedItem;
