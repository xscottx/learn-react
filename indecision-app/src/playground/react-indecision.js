class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            options: []
        }
        
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
    }

    // need to pass callback function in to listen for events in child to be invoked here to update state (parent)
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        });
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
            this.setState((prevState) => {
                // BAD options: prevState.options.push(option) <- changing previous state
                // GOOD use array concat method options: prevState.options.concat([option])
                // BEST use array concat method options: prevState.options.concat(option)
                return {
                    options: prevState.options.concat(option)
                }
            });
        }
    }

    handlePick() {
        console.log('handlePick');
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert('randomly picked option: ' + option);
    }

    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        console.log('options: ' + this.state.options);
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options} 
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        )
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

// when u do this.handlePick, that's passing by reference, not by value. eg., don't invoke
class Action extends React.Component {

    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        )
    }
}

// .map operator takes an array, puts foreach element 'option' and maps to additional stuff
class Options extends React.Component {

    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.optionText   
                }
            </div>
        )
    }
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
            this.setState(() => {
                return { error }
            });
        } else {
            this.setState(() => {
                return { error: undefined }
            });
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