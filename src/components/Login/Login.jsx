import s from "./LoginComponent.module.css";
import React from 'react';
import LoginHeader from "./LoginFormComponents/LoginHeader";
import LoginFooter from "./LoginFormComponents/LoginFooter";
import LoginForm from "./LoginFormComponents/LoginForm";
import {Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";

const ReduxLoginForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
  const handleSubmit = (formData) => {
    props.loginRequestThunkCreator(formData);
  };
  if (sessionStorage.getItem('isAuth') === 'true'
    && sessionStorage.getItem('isTested') !== 'true')
    return <Redirect to={'/testing'}/>;
  else if (sessionStorage.getItem('isAuth') === 'true'
    && sessionStorage.getItem('isTested') === 'true')
    return <Redirect to={'/goals'}/>;
  return (
    <div>
      {<div className={s.background}>
        <div className={s.container}>
          <div className={s.rightSide}>
            <LoginHeader/>
            <ReduxLoginForm onSubmit={handleSubmit}/>
            <LoginFooter/>
          </div>
        </div>
      </div>
      }
    </div>
  );

};


export default Login;