// import object from module

import React from 'react';
import ReactDOM from 'react-dom';


// babel will compile JSX element which reference to React
// React.createElement
// That is why we need to import React object
// even though we do not directly use this object in our code
const element = <h1>Hello worl</h1>;

// Let's log the element in the console
// Whenever you make any changes and save it, this application will automatically restart
// Which means you do not have to reload your browser, we call it hot-module-reloading
// console log to see the React element in the console
// This element here shows you a virtual dom
// What's being changed will send to the real dom then make changes to the one being changed
console.log(element);


// To render and show the element in our browser
// We gonna use ReactDOM
// Two arguments needed
// First argument is the element that you want to render/display in the browser
// Second argument is where in the real dom you want the element to be rendered/displayed
// Go to your public folder and have a look inside index.html where you will find a div tag with id in between the body tag
// That is the where we gonna render all our react element
// Use plain vanilla javascript to 
ReactDOM.render(element, document.getElementById('root'));







