class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        
        // state stuff
        this.state = {
            count: props.count
        };
    }

    handleAddOne() {
        // you have access to current state, convention 'prevState'
        // UPDATING state object, DOES NOT REPLACE it
        this.setState((prevState) => {
            // -- and ++ does not work!!!!
            return {
                count: prevState.count+1
            };
        });
    }

    handleMinusOne() {
        // this.props.count--;  // does not work!
        // this.state.count--;  // don't modify state directly!
        // this will be the ONLY way to do it in the future
        // this is BAD practice to directly access current state like so:
        // this.setState({ count: this.state.count + 1})
        // calls are asynchronous bc changing state updates the virtual DOM, and rendering occurs
        // react will also try to batch state updates together to consolidate and take the last updated state value
        // so this will do 2 state updates to the virtual DOM, 1 render
        this.setState((prevState) => {
            return {
                count: prevState.count-1
            };
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));