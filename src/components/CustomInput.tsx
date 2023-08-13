import React from 'react'

type InputProps = {
    type: string;
    name: string;
    placeholder : string;
    className?: string;
};

const CustomInput = (props : InputProps) => {
  return (
    <div>
        <input 
        className={`form-control ${props.className}`}
        type={props.type} 
        name={props.name}
        placeholder={props.placeholder}
        ></input>
    </div>
  )
}

export default CustomInput