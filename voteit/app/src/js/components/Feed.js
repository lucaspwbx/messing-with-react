/** @jsx React.DOM */
var React = require('react'),
    ShowAddButton = require('./ShowAddButton'),
    FeedForm = require('./FeedForm'),
    FeedList = require('./FeedList');

var Feed = React.createClass({
  getInitialState: function() {
    var FEED_ITEMS = [
        { key: '1', title: 'Realtime data!', description: 'Firebase is cool', voteCount: 49 },
        { key: '2', title: 'Javascript is fun', description: 'Lexical scoping FTW', voteCount: 34 },
        { key: '3', title: 'Coffee makes you awake', description: 'Drink responsibly', voteCount: 15}
    ];
    return {
      items: FEED_ITEMS
    };
  },
  render: function() {
    return (
      <div>
        <ShowAddButton />
        <FeedForm />
        <br/>
        <br/>
        <FeedList items={this.state.items} />
      </div>
      );
  }
});

module.exports = Feed;
