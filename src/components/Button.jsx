import React from 'react';
import '../styles/common.css'
const Button = (props) => {
    return (
        <button className="btn">
            {props.label}
        </button>
    );
};

export default Button;