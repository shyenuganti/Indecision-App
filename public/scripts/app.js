console.log('App.js is running!');

// JSX - JavaScript XML
// var template = <p>Hello, World!</p>;
var template = React.createElement(
  "h1",
 null,
  "Hello, World!"
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
