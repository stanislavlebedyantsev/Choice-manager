import s from "../LoginComponent.module.css";
import {Link, NavLink} from "react-router-dom";
import React from 'react';


const SlideLoginMenu = (props) =>{

  const USERNAME_REF = React.createRef();
  const PASSWORD_REF = React.createRef();
  const login = () =>{
    props.logunFun()
  }
  const loginUpdateText = () =>{
    const obj={
      username: USERNAME_REF.current.value,
      password: PASSWORD_REF.current.value
    }
    props.loginUpdateText(obj)
  }
  return(
    <div className={s.rightSide}>
      <div className={s.rightHeader}>
        <h1 className={s.rightH1}>Welcome to Choice Manager</h1>
      </div>
      <div className={s.rightLogin}>
        <h3 className={s.rightLoginh2}>Login</h3>
        <div className={s.rightLoginUser}>
          <input type="Username" placeholder="Username"
                 className={s.login}
                 ref={USERNAME_REF}
                 value={props.loginStateText.login}
                 onChange={loginUpdateText}/>
          <input type="Password" placeholder="Password"
                 className={s.password}
                 ref={PASSWORD_REF}
                 value={props.loginStateText.password}
                 onChange={loginUpdateText}/>
          <div className={s.button} >
              <button onClick={login}>Login</button>
          </div>
        </div>
      </div>
      <div className={s.rightFooter}>
        No account? <NavLink to={"/registration"}>Create One!</NavLink>
      </div>
    </div>
  )
}
export default SlideLoginMenu