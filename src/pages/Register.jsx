import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import GenericForm from '../components/GenericForm/Form';

import { singUp } from '../services/auth';


const Register = () => {
  const navigate = useNavigate();

  const initFormRegister = {
    userEmail: {
      value: "",
      type: "email",
      className: "form-control",
      placeHolder: "example@email.com",
      label: "Email"
    },
    userPwd: { // pwd == password
      value: "",
      type: "password",
      className: "form-control",
      placeHolder: "* * * * * * * *",
      label: "Password",
      validations: {
        minLength: 6,
        maxLength: 24
      }
    },
    userName: {
      value: "",
      type: "text",
      className: "form-control",
      placeHolder: "username",
      label: "Username",
      rowDisplay: 6
    },
    userPhone: {
      value: "",
      type: "tel",
      className: "form-control",
      placeHolder: "11 1234-1234",
      label: "Phone",
      rowDisplay: 6,
      validations: {
        pattern: new RegExp(/[0-9]{2,4}[\s][0-9]{2,4}-[0-9]{2,4}/)
      }
    }
  };


  const handleSubmitLogin = async (e, values) => {
    e.preventDefault();

    const formValues= Object.keys(values).reduce((acc, key)=> ({
      ...acc,
      [key]: values[key].value
    }), {});

    await singUp(formValues);
    
    navigate("/");
  }


  return (
    <div className='main-page-margin'>
      <div className="container" id="wrap-card">
        <div className="card" id="center-card-form">
          <div className="card-header text-center">
            <h3>Register</h3>
          </div>
          <div className="card-body">
            <GenericForm onHandleSubmit={handleSubmitLogin} initFormData={initFormRegister} buttonText="Register"/>
          </div>
          <div className="card-footer text-center">
            <p>Do you have an account ? Sing in <Link to="/login">Here</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Register;