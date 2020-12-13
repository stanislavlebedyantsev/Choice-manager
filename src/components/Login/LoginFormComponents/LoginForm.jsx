import s from "../LoginComponent.module.css";
import React from "react";
import btn from '../../common/buttonsStyle/buttonsStyle.module.css'

const LoginForm = (props) => {
  return (
    <div className={s.rightLogin}>
      <h3 className={s.rightLoginh2}>Login</h3>
      <div className={s.rightLoginUser}>
        <input name="usernameOrEmail" placeholder="Username"
               className={s.login}
               value={props.usernameOrEmail}
               onChange={props.handleChange}/>
        <input type="password" name={"password"} placeholder="Password"
               className={s.password}
               value={props.password}
               onChange={props.handleChange}/>
        <div className={s.button}>
          <button className={btn.btn} onClick={props.handleClick}>Login</button>
        </div>
      </div>
    </div>);
};

export default LoginForm;