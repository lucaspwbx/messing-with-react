      /** @jsx React.DOM */

      var MessageBox = React.createClass({
        deleteMessage: function(message) {
          var newMessages = _.without(this.state.messages, message);
          this.setState({
            messages: newMessages
          });
        },
        handleAdd: function(e) {
          var newMessage = this.refs.newMessage.getDOMNode().value;
          var newMessages = this.state.messages.concat([newMessage]);
          this.setState({
            messages: newMessages
          });
        },
        getInitialState: function() {
          return {
            isVisible: true,
            titleMessage: 'Hello, World',
            messages: [
              'I like the world',
              'Coffee flavored ice cream is highly underrated',
              'My spoon is too big',
              'Tuesday is coming. Did you bring your coat?',
              'I am a banana'
              ]
          }
        },
        render: function() {
          var inlineStyles = {
            display: this.state.isVisible ? 'block' : 'none'
          };

          var messages = this.state.messages.map(function(message) {
            return <SubMessage message={message} onDelete={this.deleteMessage}/>;
          }.bind(this));

          return (
            <div className='container' style={inlineStyles}>
              <h2>{this.props.titleMessage}</h2>
              <input ref="newMessage" type="text" />
              <button class="btn btn-primary" onClick={this.handleAdd}>Add</button>
              {messages}
            </div>
            );
        }
      });

      var SubMessage = React.createClass({
        handleDelete: function (e) {
          this.props.onDelete(this.props.message);
        },
        propTypes: {
          message: React.PropTypes.string.isRequired
        },
        getDefaultProps: function() {
          return {
            message: 'its good to see you'
          }
        },
        render: function() {
          return (
            <div>
              {this.props.message}
              <button onClick={this.handleDelete}>x</button>
            </div>
            );
        }
      });

      var message = 'Yo!';

      React.renderComponent(
        <MessageBox titleMessage={message}/>,
        document.getElementById('app')
        );
