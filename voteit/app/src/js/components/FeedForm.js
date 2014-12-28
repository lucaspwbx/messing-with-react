/** @jsx React.DOM */
var React = require('react');

var FeedForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Title"/>
        <input type="text" placeholder="Description"/>
        <input type="submit" value="Add"/>
      </form>
      );
  }
});

module.exports = FeedForm;
