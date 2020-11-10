import s from "../Registration.module.css";
import {NavLink} from "react-router-dom";
import React from 'react';

const SlideRegMenu = (props) => {
  const LOGIN_REF = React.createRef();
  const EMAIL_REF = React.createRef();
  const PASSWORD_REF = React.createRef();
  const PASSWORD_CONF_REF = React.createRef();
  const NAME_REF = React.createRef();
  const SURNAME_REF = React.createRef();
  const registration = () => {
    props.registrationFun()
  }
  const registrationUpdateText = () => {
    const obj = {
      login: LOGIN_REF.current.value,
      email: EMAIL_REF.current.value,
      password: PASSWORD_REF.current.value,
      passwordConfirmation: PASSWORD_CONF_REF.current.value,
      name: NAME_REF.current.value,
      surname: SURNAME_REF.current.value
    }
    props.registrationUpdateText(obj)
  }
  return (
    <div className={s.rightSide}>
      <div className={s.rightHeader}>
        <h1 className={s.rightH1}>Welcome to Choice Manager</h1>
      </div>
      <div className={s.rightLogin}>
        <h3 className={s.rightLoginh2}>Registration</h3>
        <div className={s.rightLoginUser}>
          <input type="firstName" placeholder="First name"
                 className={s.firstName}
                 value={props.registrationStateText.name}
                 ref={NAME_REF}
                 onChange={registrationUpdateText}/>
          <input type="secondName" placeholder="Second name"
                 className={s.secondName}
                 value={props.registrationStateText.surname}
                 ref={SURNAME_REF}
                 onChange={registrationUpdateText}/>
          <input type="Email" placeholder="Email"
                 className={s.email}
                 value={props.registrationStateText.email}
                 ref={EMAIL_REF}
                 onChange={registrationUpdateText}/>
          <input type="Username" placeholder="Username"
                 className={s.username}
                 value={props.registrationStateText.login}
                 ref={LOGIN_REF}
                 onChange={registrationUpdateText}/>
          <input type="password" placeholder="Password"
                 className={s.password}
                 value={props.registrationStateText.password}
                 ref={PASSWORD_REF}
                 onChange={registrationUpdateText}/>
          <input type="confPassword" placeholder="Confirm password"
                 className={s.confPassword}
                 value={props.registrationStateText.passwordConfirmation}
                 ref={PASSWORD_CONF_REF}
                 onChange={registrationUpdateText}/>
          <div className={s.button}>
            <button onClick={registration}>Register</button>
          </div>
        </div>
      </div>
      <div className={s.rightFooter}>
        Already registered? <NavLink to="/login">Log in</NavLink>
      </div>
    </div>
  )
}
export default SlideRegMenu