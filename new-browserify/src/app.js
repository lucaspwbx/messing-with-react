/** @jsx React.DOM */

var React = require('react'),
    HelloWorld = require('./hello');

React.render(
    <HelloWorld />,
    document.getElementById('app')
);
