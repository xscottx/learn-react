// Visibility Toggle - render, constructor, handleToggleVisibility
// visibility -> false

const app = {
    title: 'Visibility Toggle',
    details: 'Some detail here'
}
class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false
        }
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    }

    handleToggleVisibility() {
        console.log('handleToggleVisibility');
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
        console.log('visibility: ' + this.state.visibility);
    }

    render() {
        return (
            <div>
            <h1>{this.props.title}</h1>
            <button onClick={this.handleToggleVisibility}>
                {!this.state.visibility ? 'Show Details' : 'Hide Details'}
            </button>
            <p>{this.state.visibility && this.props.details}</p>
        </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle title={app.title} details={app.details}/>, document.getElementById('app'));