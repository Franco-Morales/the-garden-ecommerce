import React from 'react'


const Input = ({ name, inputProp, onHandleChangeInput }) => {
    const { type, value, placeHolder, className, validations } = inputProp;
    return (
        <input
            id={name}
            type={type} 
            name={name} 
            value={value} 
            className={className} 
            placeholder={placeHolder}
            onChange={onHandleChangeInput}
            //html validations
            {...validations}
            required
        />
    )
}


export default Input;