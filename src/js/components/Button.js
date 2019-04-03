import React from 'react';

const Button = (props) => (

    <button className={`btn ${props.btnType}`}
            disabled={props.disabled}
            type={props.type}
            onClick={props.click}>
        {props.children}
    </button>
);

export default Button;