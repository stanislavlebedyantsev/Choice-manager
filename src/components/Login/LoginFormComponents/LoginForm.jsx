import s from "../LoginComponent.module.css";
import React from "react";
import btn from '../../common/buttonsStyle/buttonsStyle.module.css';
import {
  maxLengthForPasswordCreator,
  minLengthForPasswordCreator,
  required
} from "../../../utils/validators/validators";
import {fieldCreator, RenderRequiredField} from "../../common/renderRequiredField/renderRequiredField";
import ErrorComponent from "../../common/errorAlert/errorComponent";

const minLengthForPassword = minLengthForPasswordCreator(1);
const maxLengthForPassword = maxLengthForPasswordCreator(30);

const LoginForm = (props) => {
  const {handleSubmit, isError, error} = props;
  return (
    <div className={s.rightLogin}>
      <h3 className={s.rightLoginh2}>Login</h3>
      <form onSubmit={handleSubmit} className={s.rightLoginUser}>
        {fieldCreator("usernameOrEmail", "Username", s.login, RenderRequiredField, [required])}
        {fieldCreator("password", "Password",
          s.password, RenderRequiredField, [required, minLengthForPassword, maxLengthForPassword], {type: 'password'})}

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
          <button className={btn.btn}>Login</button>
        </div>
      </form>
    </div>);
};

export default LoginForm;