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