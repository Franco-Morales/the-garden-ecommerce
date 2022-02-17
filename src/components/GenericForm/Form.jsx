import React, { useEffect, useState } from 'react';

import Input from './Input';


const GenericForm = ({ onHandleSubmit, initFormData, buttonText }) => {
    const [ formFields, setFormFileds ] = useState(initFormData);
    const [ formStatus, setFormStatus ] = useState( true );

    const handleChange = (event) => {
        let { name, value } = event.target;
        setFormFileds({
            ...formFields,
            [name]: {
                ...formFields[name],
                value
            }
        });
    }

    useEffect( () => {
        const checkFormStatus = () => {
            setFormStatus(
                !Object.keys(formFields).every( key => formFields[key].value !== "" )
            )
        };
        checkFormStatus();
    },[formFields])
    
    return (
        <form className="row g-3" onSubmit={(e) => onHandleSubmit(e, formFields)}>
        { 
            Object.keys(formFields).map( (key, index) =>
                (
                    <div className={`col-md-${formFields[key].rowDisplay ?? 12}`} key={index}>
                        <label className="form-label" htmlFor={key}>{formFields[key].label}</label>
                        {/* {console.log(formFields[key].validations)} */}
                        <Input 
                            name={key} 
                            inputProp={{ ...formFields[key] }}
                            onHandleChangeInput={handleChange}
                        />
                    </div>
                )
            )
        }   
            <hr className='my-4 bg-amazon'/>
            <div className="col-md-12 d-grid">
                <button className='btn btn-primary' type='submit' disabled={formStatus}>{ buttonText }</button>
            </div>
        </form>
    )
}


export default GenericForm;