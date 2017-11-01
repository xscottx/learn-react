console.log('Apps.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: ['One', 'Two']
}
// wrap parenthesis () to root tag is syntactic sugar
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
        </ol>
        <p>{(app.options && app.options.length > 0) ? 'Here are your options' : 'No options'}</p>
    </div>
);

const user = {
    name: 'Hoang',
    age: 21,
    location: 'Plano, TX'
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
    // implicit returning 'undefined' for function that returns
};

// 'undefined', 'null' are ignored by JSX
// ternary: condition ? a : b
// true && something -> something
// false && something -> false

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
};
const minusOne = () => {
    count--;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    const template2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    // ReactDOM is a virtual DOM that looks for deltas in app state changes and applies to only that
    ReactDOM.render(template2, appRoot);
};

renderCounterApp();