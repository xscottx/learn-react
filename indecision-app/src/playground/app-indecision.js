// stateless functional component
// need state or lifecycle? -> use class
// don't need state or lifecycle? -> use stateless functional component

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: []
        }

        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
    }

    // START LIFECYCLE METHODS
    // when component loads
    componentDidMount() {
        console.log('fetching data');
        // JSON.stringify takes object and makes it into string representation
        // JSON.parse takes string representation, and puts into JSON object
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // do nothing
        }
        
    }

    // when state has changed, and has access to props & state
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
    }

    // when components unmount, usually happens when goes to new page
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    // END LIFECYCLE METHODS
    // need to pass callback function in to listen for events in child to be invoked here to update state (parent)
    handleDeleteOptions() {

        // old school syntax
    //     this.setState(() => {
    //         return {
    //             options: []
    //         }
    //     });

        // ES6 syntax
        this.setState(() => ({ options: [] }));  // returns state object back with options

        const num = () => {}    // returns nothing back
        const num2 = () => ({})    // returns empty option back
    }

    handleAddOption(option) {
        console.log('handleAddOption: ' + option);
        // event.preventDefault();
        // const option = event.target.elements.optshon.value.trim();  // optshon comes from input name attribute
        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        else {
            // BAD options: prevState.options.push(option) <- changing previous state
            // GOOD use array concat method options: prevState.options.concat([option])
            // BEST use array concat method options: prevState.options.concat(option)
            this.setState((prevState) => ({
                options: prevState.options.concat(option)
            }))
        }
    }

    handlePick() {
        console.log('handlePick');
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert('randomly picked option: ' + option);
    }

    handleDeleteOption(optionToRemove) {
        console.log('handleDeleteOption', optionToRemove);
        // leverage Arrays.filter to create a new array of options filtering out the unmatched one
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header 
                    subtitle={subtitle} 
                />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button 
                onClick={props.handleDeleteOptions}
                disabled={props.options.length === 0}
            >
                Remove All
            </button>
            {props.options.length === 0 && <p>Please add an option to get started!</p>}
            {
                props.options.map((option) => (
                    <Option 
                        key={option} 
                        handleDeleteOption={props.handleDeleteOption} 
                        optionText={option} 
                    />
                ))
            }
        </div>
    )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}
            >
                Remove
            </button>
        </div>
    )
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        // making sure that the context of this for handleAddOption will always be used for AddOptions
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            error: undefined
        }
    }

    // leaving handleAddOption in here so that we can do form-related things inside AddOption and not in parent
    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.optshon.value.trim();
        const error = this.props.handleAddOption(option);

        if (error) {
            // ES6 syntax for 'error: error; -> then 'error'
            this.setState(() => ({ error }));
        } else {
            event.target.elements.optshon.value = '';
            this.setState(() => ({ error: undefined }));
        }
    }

    // makes sure the bind of this is the same in render as in AddOption
    // <form onSubmit={this.handleAddOption.bind(this)}>  // but this is inefficient bc it will bind on every render
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="optshon" />
                    <button>Submit Button</button>
                </form>
            </div>
        )
    }
}

// leverage JSX syntax to throw in indecisionapp 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));