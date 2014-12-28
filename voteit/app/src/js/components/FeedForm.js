/** @jsx React.DOM */
var React = require('react');

var FeedForm = React.createClass({
  handleForm: function(e) {
    e.preventDefault();

    var newItem = {
      title: this.refs.title.getDOMNode().value,
      description: this.refs.desc.getDOMNode().value,
      voteCount: 0
    };

    this.refs.feedForm.getDOMNode().reset();

    this.props.onNewItem(newItem);
  },
  render: function() {
    var display = this.props.displayed ? 'block' : 'none';
    var styles = {
      display: display
    };
    return (
      <form ref="feedForm" id="feedForm" style={styles} onSubmit={this.handleForm}>
        <input ref="title" type="text" placeholder="Title"/>
        <input ref="desc" type="text" placeholder="Description"/>
        <input type="submit" value="Add"/>
      </form>
      );
  }
});

module.exports = FeedForm;
