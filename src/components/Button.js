import React from 'react';

const Button = (props) => {
    return (
        <button 
            className={props.class}
            type={props.type}>
        {props.name}
        </button>
    );
}

export default Button;