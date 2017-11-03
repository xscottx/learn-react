const app = {
    title: 'Visibility Toggle',
    details: 'Some detail here'
}

let show = false;

const toggleDetails = () => {
    show = !show
    console.log(show);
    render();
}

const render = () => {
    const jsx = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleDetails}>
                {!show ? 'Show Details' : 'Hide Details'}
            </button>
            <p>{show && app.details}</p>
        </div>
    );

    const appRoot = document.getElementById('app');
    ReactDOM.render(jsx, appRoot);
};

render();