import React from 'react';

export default class AddOption extends React.Component {
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
                  <button>Add Option</button>
              </form>
          </div>
      )
  }
}