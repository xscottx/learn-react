import React from 'react';
import Option from './option';

const Options = (props) => (
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

export default Options;