/** @jsx React.DOM */
var React = require('react'),
    FeedItem = require('./FeedItem');

var FeedList = React.createClass({
  render: function() {
    var feedItems = this.props.items.map(function(item) {
      return <FeedItem title={item.description} desc={item.description} />
    });

    return (
      <ul>
        {feedItems}
      </ul>
      );
  }
});

module.exports = FeedList;
