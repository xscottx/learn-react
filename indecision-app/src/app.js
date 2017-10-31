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
const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);