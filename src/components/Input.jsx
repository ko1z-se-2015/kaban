import React from 'react';
import '../styles/common.css'

const Input = (props) => {

   if(props.type === "phone"){
       return (
           <div>
               <label>{props.label}</label>
               <input
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
               />
           </div>
       )
   }

    return (
        <div className="input-form">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input;