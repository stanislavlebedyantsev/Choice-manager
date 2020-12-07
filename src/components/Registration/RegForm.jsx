import s from "./Registration.module.css";
import React from 'react';
import {RegistrationHeader} from "./RegistrationFormComponents/RegistrationHeader";
import {RegistrationFooter} from "./RegistrationFormComponents/RegistrationFooter";
import {Redirect} from "react-router-dom";

const RegForm = (props) => {
  const onRegistration = () => {
    props.registrationRequestThunkCreator(props.registrationState);
  };
  const handleChange = (event) => {
    let obj = {
      ...props.registrationState
    };
    obj = {
      ...obj,
      [event.target.name]: event.target.value
    };
    props.registrationUpdateText(obj);
  };
  if(props.registrationState.isRegistrationSuccess) return  <Redirect to={'/login'}/>
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.rightSide}>
          <RegistrationHeader/>
          <div className={s.rightLogin}>
            <h3 className={s.rightLoginh2}>Registration</h3>
            <div className={s.rightLoginUser}>
              <input name="name" placeholder="First name"
                     className={s.firstName}
                     value={props.registrationState.name}
                     onChange={handleChange}/>
              <input name="surname" placeholder="Second name"
                     className={s.secondName}
                     value={props.registrationState.surname}
                     onChange={handleChange}/>
              <input name="email" placeholder="Email"
                     className={s.email}
                     value={props.registrationState.email}
                     onChange={handleChange}/>
              <input name="username" placeholder="Username"
                     className={s.username}
                     value={props.registrationState.login}
                     onChange={handleChange}/>
              <input type="password" name={"password"} placeholder="Password"
                     className={s.password}
                     value={props.registrationState.password}
                     onChange={handleChange}/>
              <input type="password" name={"passwordConfirmation"} placeholder="Confirm password"
                     className={s.confPassword}
                     value={props.registrationState.passwordConfirmation}
                     onChange={handleChange}/>
              <div className={s.button}>
                <button onClick={onRegistration}>Register</button>
              </div>
            </div>
          </div>
          <RegistrationFooter/>
        </div>
      </div>
    </div>

  );
};
export default RegForm;