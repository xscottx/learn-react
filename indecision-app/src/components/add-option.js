import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  }
  
  constructor(props) {
      super(props);
      // making sure that the context of this for handleAddOption will always be used for 
      // don't need this if you have arrow function
      // this.handleAddOption = this.handleAddOption.bind(this);

      // don't need this anymore and use variable up top if u use babel-plugin-transform-class-properties stage-2
      // this.state = {
      //     error: undefined
      // }
  }

  // leaving handleAddOption in here so that we can do form-related things inside AddOption and not in parent
  handleAddOption = (event) => {
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
              {this.state.error && <p className="add-option-error">{this.state.error}</p>}
              <form className="add-option" onSubmit={this.handleAddOption}>
                  <input className="add-option__input" type="text" name="optshon" />
                  <button className="button">Add Option</button>
              </form>
          </div>
      )
  }
}