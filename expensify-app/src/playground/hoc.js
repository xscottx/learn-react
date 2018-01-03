// Higher Order Component (HOC) - A component (HOC) that renders another component (regular)
// Advantages
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// used spread operator on props to get the info prop passed down
const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info! Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  )
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
       ) : (
         <p>Please login to view the info</p>
      )
      }
      
    </div>
  )
}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));