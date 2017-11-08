import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/indecision-app';

// leverage JSX syntax to throw in indecisionapp 
ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const Layout = (props) => {
//   return (
//     <div>
//       <p>header</p>
//       {props.children}
//       <p>footer</p>
//     </div>
//   );
// }

// const template = (
//   <div>
//     <h1>Page Title</h1>
//     <p>This is my page</p>
//   </div>
// )


// use props to pass into JSX
// ReactDOM.render(<Layout content={template}/>, document.getElementById('app'));

// allows you to pass JSX into JSX into props, must use props.children inside JSX to access
// ReactDOM.render(<Layout><p>This is inline</p></Layout>, document.getElementById('app'));

// class OldSyntax {
//   constructor() {
//     this.name = 'Mike';
//   }
//   getGreeting() {
//     return `Hi. My name is ${this.name}`;
//   }
// }

// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(oldSyntax.getGreeting());

// // new syntax
// class NewSyntax {
//   name = 'Jen';
//   getGreeting = () => {
//     return `Hi. My name is ${this.name}`; 
//   }
// }

// const newSyntax = new NewSyntax();
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());