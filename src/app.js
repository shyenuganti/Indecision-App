console.log('App.js is running!');

// JSX - JavaScript XML
var template = (
   <div>
    <h1>Indecision App</h1>
    <p>This is some info</p>
    <ol>
        <li>Item One</li>
        <li>Item two</li>
    </ol>
   </div>
);

var user = {
    name:'Sri Harsha',
    age:26,
    location:'Columbus'
};

var templateTwo=(
    <div>
        <h1>Name: {user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

// Only the last render is effective. 
// That overrides the previous onseeked. 
// Be careful
// ReactDOM.render(templateTwo, appRoot);

