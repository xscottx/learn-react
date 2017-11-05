class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        
        // state stuff
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        console.log('componentDidMount');
        const json = localStorage.getItem('count');
        const count = parseInt(json);
        if (!isNaN(count)) {
            this.setState(() => ({ count }));
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log('componentDidUpdate');
            localStorage.setItem('count', this.state.count);
        }
        
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
                <button 
                    onClick={this.handleReset}
                    disabled={this.state.count === 0}
                >
                    reset
                </button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));