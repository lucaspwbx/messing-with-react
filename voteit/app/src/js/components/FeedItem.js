/** @jsx React.DOM */
var React = require('React');

var FeedItem = React.createClass({
  vote: function(newCount) {
    this.props.onVote({
      key: this.props.key,
      title: this.props.title,
      description: this.props.desc,
      voteCount: newCount
    });
  },
  voteUp: function() {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count + 1;
    this.vote(newCount);
  },
  voteDown: function() {
    var count = parseInt(this.props.voteCount, 10);
    var newCount = count - 1;
    this.vote(newCount);
  },
  render: function() {
    var positiveNegativeClassName = this.props.voteCount >= 0 ? 'badge badge-success' : 'badge badge-danger';
    return (
      <li key={this.props.key}>
        <span className={positiveNegativeClassName}>{this.props.voteCount}</span>
        <h4>{this.props.title}</h4>
        <span>{this.props.desc}</span>
        <span>
          <button id="up" onClick={this.voteUp}>&uarr;</button>
          <button id="down" onClick={this.voteDown}>&darr;</button>
        </span>
      </li>
      );
  }
});

module.exports = FeedItem;
