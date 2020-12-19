import s from "./Registration.module.css";
import React from 'react';
import {RegistrationHeader} from "./RegistrationFormComponents/RegistrationHeader";
import {RegistrationFooter} from "./RegistrationFormComponents/RegistrationFooter";
import {Redirect} from "react-router-dom";
import {reduxForm} from "redux-form";
import RegistrationForm from "./RegistrationFormComponents/RegistrationForm";

const ReduxRegistrationForm = reduxForm({form:'registration'})(RegistrationForm)

const Registration = ({registrationRequestThunkCreator, registrationState}) => {
  const handleSubmit = (formData) => {
    registrationRequestThunkCreator(formData);
  };
  if (registrationState.isRegistrationSuccess) return <Redirect to={'/login'}/>;
  return (
    <div className={s.background}>
      <div className={s.container}>
        <div className={s.rightSide}>
          <RegistrationHeader/>
          <ReduxRegistrationForm onSubmit={handleSubmit}/>
          <RegistrationFooter/>
        </div>
      </div>
    </div>

  );
};
export default Registration;