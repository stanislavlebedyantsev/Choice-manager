import s from "../Registration.module.css";
import {NavLink} from "react-router-dom";

export const RegistrationFooter = (props) => {
  return (
    <div className={s.rightFooter}>
      Already registered? <NavLink to="/login" onClick={props.hideError}>Log in</NavLink>
    </div>
  );
};