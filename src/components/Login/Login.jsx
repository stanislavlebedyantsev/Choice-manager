import s from "./LoginComponent.module.css";
import React from 'react';
import {LoginHeader} from "./LoginFormComponents/LoginHeader";
import {LoginFooter} from "./LoginFormComponents/LoginFooter";
import LoginForm from "./LoginFormComponents/LoginForm";
import {Redirect} from "react-router-dom";
import ErrorComponent from "../common/errorAlert/errorComponent";


const Login = (props) => {
  const handleClick = () => {
    props.toggleIsFetching(true)
    props.loginRequestThunkCreator(props.loginStateText, props.stateUserData);
  };
  const handleChange = (event) => {
    let obj = {
      ...props.loginStateText
    };
    obj = {
      ...obj,
      [event.target.name]: event.target.value
    };
    props.loginUpdateText(obj);
  };
  if (props.isAuth && props.isTested) return <Redirect to={'/goals'}/>
  if (props.isAuth && !props.isTested) return <Redirect to={'/testing'}/>
  return (
    <>
      {<div className={s.background}>
        <ErrorComponent
          isError={props.isError}
          errorText={props.errorText}
        />
        <div className={s.container}>
          <div className={s.rightSide}>
            <LoginHeader/>
            {/*<SocialsLogin/>*/}
            <LoginForm handleChange={handleChange}
                       handleClick={handleClick}
                       stateText={props.loginStateText}
                       isFetching={props.isFetching}/>
            <LoginFooter hideError={props.hideError}/>
          </div>
        </div>
      </div>
      }
    </>
  );
};
export default Login;