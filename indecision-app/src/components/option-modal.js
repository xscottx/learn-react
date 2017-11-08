import React from 'react';
import Modal from 'react-modal';

// implicit return
const OptionModal = (props) => (
  // modal has 2 default props that must be set: isOpen, and contentLabel
  // onRequestClose is a callback function to use
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearSelectedOption}
  >
    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.handleClearSelectedOption}>Okay</button>
  </Modal>
);

// old school version
// const OptionModal = () => {
//   return (
//     <div>
//       some text
//     </div>
//   )
// };

export default OptionModal;