import s from "./LoginComponent.module.css";
import React from 'react';
import {LoginHeader} from "./LoginFormComponents/LoginHeader";
import {LoginFooter} from "./LoginFormComponents/LoginFooter";
import LoginForm from "./LoginFormComponents/LoginForm";
import SocialsLogin from "./LoginFormComponents/SocialsLogin";
import preloader from "../../images/Preloader.svg";
import Preloader from "../common/Preloader/Preloader";


const Login = (props) => {
  const handleClick = () => {
    props.toggleIsFetching(true)
    props.loginRequestThunkCreator(props.loginStateText);
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
      {<div className={s.background}>
          <div className={s.container}>
            <div className={s.rightSide}>
              <LoginHeader/>
              <SocialsLogin/>
              <LoginForm handleChange={handleChange}
                         handleClick={handleClick}
                         stateText={props.loginStateText}
              isFetching={props.isFetching}/>
              <LoginFooter/>
            </div>
          </div>
        </div>
      }
    </>
  );
};
export default Login;