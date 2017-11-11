import React from 'react';

const PortfolioDetail = (props) => {
  console.log(props);

  return (
    <div>
      <p>My portfolio id is {props.match.params.id}.</p>
    </div>
  )
};
  

export default PortfolioDetail;