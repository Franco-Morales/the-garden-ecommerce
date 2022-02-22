import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import GenericForm from '../components/GenericForm/Form';

import { logIn } from "../services/auth";


const Login = () => {
  const navigate = useNavigate();

  const initFormLogin = {
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
      label: "Password"
    }
  };


  const handleSubmitLogin = async (e, values) => {
    e.preventDefault();

    const formValues= Object.keys(values).reduce((acc, key)=> ({
      ...acc,
      [key]: values[key].value
    }), {});

    let { status, message } = await logIn(formValues);
    
    toast[status](message, { theme: "colored", position: "bottom-right"});
    
    // volver una página anteriror == -1
    ( status === "success") && navigate(-1);
  }


  return (
    <div className='main-page-margin'>
      <div className="container" id="wrap-card">
        <div className="card" id="center-card-form">
          <div className="card-header text-center">
            <h3>Login</h3>
          </div>
          <div className="card-body">
            <GenericForm onHandleSubmit={handleSubmitLogin} initFormData={initFormLogin} buttonText="Login" />
          </div>
          <div className="card-footer text-center">
            <p>Don't have an account ? Sign up <Link to="/signup">Here</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Login