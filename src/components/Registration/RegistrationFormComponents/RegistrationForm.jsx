import s from "../Registration.module.css";
import btn from "../../common/buttonsStyle/buttonsStyle.module.css";
import React from "react";
import {
  emailValidation,
  maxLengthForPasswordCreator,
  minLengthForPasswordCreator,
  required
} from "../../../utils/validators/validators";
import {fieldCreator, RenderRequiredField} from "../../common/renderRequiredField/renderRequiredField";
import ErrorComponent from "../../common/errorAlert/errorComponent";

const minLengthForPassword = minLengthForPasswordCreator(1);
const maxLengthForPassword = maxLengthForPasswordCreator(30);


const RegistrationForm = (props) => {
  const {handleSubmit, isError, error} = props;
  return (
    <div className={s.rightLogin}>
      <h3 className={s.rightLoginh2}>Registration</h3>
      <form className={s.rightLoginUser} onSubmit={handleSubmit}>
        <div className={s.nameAndSurname}>
          {fieldCreator("name", "First name", s.firstName, RenderRequiredField, [required])}
          {fieldCreator("surname", "Second name", s.secondName, RenderRequiredField, [required])}
        </div>
        {fieldCreator("email", "Email", s.email, RenderRequiredField, [required, emailValidation])}
        {fieldCreator("username", "Username", s.username, RenderRequiredField, [required])}
        {fieldCreator("password", "Password", s.password, RenderRequiredField,
          [required, minLengthForPassword, maxLengthForPassword], {type: 'password'})}
        {fieldCreator("passwordConfirmation", "Confirm password", s.confPassword, RenderRequiredField,
          [required, minLengthForPassword, maxLengthForPassword], {type: 'password'})}
        <div>
          {
            error ?
              <ErrorComponent
                isError={isError}
                errorText={error}
              />
              : null
          }
        </div>
        <div className={s.button}>
          <button className={btn.btn} type={"submit"}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;