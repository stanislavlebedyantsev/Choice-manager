import s from "./LoginComponent.module.css";
import {NavLink, Redirect} from "react-router-dom";
import React from 'react';
import {LoginHeader} from "./LoginFormComponents/LoginHeader";
import {LoginFooter} from "./LoginFormComponents/LoginFooter";


const LoginForm = (props) => {
  const onLogin = () => {
    props.loginRequest();
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
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.rightSide}>
          <LoginHeader/>
          <div className={s.rightLogin}>
            <h3 className={s.rightLoginh2}>Login</h3>
            <div className={s.rightLoginUser}>
              <input name="usernameOrEmail" placeholder="Username"
                     className={s.login}
                     value={props.loginStateText.usernameOrEmail}
                     onChange={handleChange}/>
              <input type="password" name={"password"} placeholder="Password"
                     className={s.password}
                     value={props.loginStateText.password}
                     onChange={handleChange}/>
              <div className={s.button}>
                <button onClick={onLogin}>Login</button>
              </div>
            </div>
          </div>
          <LoginFooter/>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;