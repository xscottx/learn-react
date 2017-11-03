const obj = {
    name: 'Vikram',
    getName() {
        return this.name;
    }
};

const getName = obj.getName;    // won't work bc the 'this' reference is not inside 'obj'
const getName2 = obj.getName.bind({name: 'Andrew' });    // works with a bind that forces name to return
console.log(getName2());

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Thing one', 'Thing two', 'Thing four'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
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
    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

// .map operator takes an array, puts foreach element 'option' and maps to additional stuff
class Options extends React.Component {
    constructor(props) {
        super(props);
        // making sure that the context of this for handleRemoveAll will always be used for remove all
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options);    // doesn't work! 'props' is null, need to bind
        // alert('handleRemoveall');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
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
    }

    handleAddOption(event) {
        event.preventDefault();
        const option = event.target.elements.hoang.value.trim();  // hoang comes from input name attribute
        option && alert(option);
    }

    // makes sure the bind of this is the same in render as in AddOption
    // <form onSubmit={this.handleAddOption.bind(this)}>  // but this is inefficient bc it will bind on every render
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="hoang" />
                    <button>Submit Button</button>
                </form>
            </div>
        )
    }
}

// leverage JSX syntax to throw in indecisionapp 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));