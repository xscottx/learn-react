console.log('Apps.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    
    const option = e.target.elements.option.value;  // get form element value

    if (option) {
        app.options.push(option);   // add element to array
        e.target.elements.option.value = '';    // clear form element value
        renderAppFunction()
    }

};

const onRemoveAll = () => {
    app.options = [];
    renderAppFunction()
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
};
// leverage JS .map to do additional things to value in array
const renderAppFunction = () => {
    // wrap parenthesis () to root tag is syntactic sugar
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) => <li key={option}>Option: {option}</li>)
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
};

renderAppFunction();