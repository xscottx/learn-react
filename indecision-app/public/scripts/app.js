'use strict';

console.log('Apps.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['One', 'Two']
    // wrap parenthesis () to root tag is syntactic sugar
};var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item 1'
        ),
        React.createElement(
            'li',
            null,
            'Item 2'
        )
    ),
    React.createElement(
        'p',
        null,
        app.options && app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

var user = {
    name: 'Hoang',
    age: 21,
    location: 'Plano, TX'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
    // implicit returning 'undefined' for function that returns
};

// 'undefined', 'null' are ignored by JSX
// ternary: condition ? a : b
// true && something -> something
// false && something -> false

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var template2 = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );

    // ReactDOM is a virtual DOM that looks for deltas in app state changes and applies to only that
    ReactDOM.render(template2, appRoot);
};

renderCounterApp();
