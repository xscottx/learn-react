import React from 'react';
import AddOption from './add-option';
import Options from './options';
import Header from './header';
import Action from './action';

// stateless functional component
// need state or lifecycle? -> use class
// don't need state or lifecycle? -> use stateless functional component

export default class IndecisionApp extends React.Component {
  state = {
    options: []
  }

  // constructor(props) {
      // super(props);

      // this.state = {
      //     options: []
      // }

      // this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
      // this.handleAddOption = this.handleAddOption.bind(this);
      // this.handlePick = this.handlePick.bind(this);
      // this.handleDeleteOption = this.handleDeleteOption.bind(this);
  // }

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
  handleDeleteOptions = () => {

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

  handleAddOption = (option) => {
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

  handlePick = () => {
      console.log('handlePick');
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      alert('randomly picked option: ' + option);
  }

  handleDeleteOption = (optionToRemove) => {
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