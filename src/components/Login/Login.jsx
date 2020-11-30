import s from "./LoginComponent.module.css";
import {NavLink, Redirect} from "react-router-dom";
import React from 'react';
import {LoginHeader} from "./LoginFormComponents/LoginHeader";
import {LoginFooter} from "./LoginFormComponents/LoginFooter";
import LoginForm from "./LoginFormComponents/LoginForm";
import SocialsLogin from "./LoginFormComponents/SocialsLogin";
import preloader from "../../images/Preloader.svg";


const Login = (props) => {
  const handleClick = () => {
    props.toggleIsFetching(true)
    props.loginRequest();
    props.toggleIsFetching(false)
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
  return (
    <>
      {props.isFetching ?
        (<div className={s.preloader}>
          <img src={preloader}/>
        </div>) :
        <div className={s.background}>
          <div className={s.container}>
            <div className={s.rightSide}>
              <LoginHeader/>
              <SocialsLogin/>
              <LoginForm handleChange={handleChange}
                         handleClick={handleClick}
                         stateText={props.loginStateText}/>
              <LoginFooter/>
            </div>
          </div>
        </div>
      }
    </>
  );
};
export default Login;