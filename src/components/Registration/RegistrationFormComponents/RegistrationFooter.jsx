import s from "../Registration.module.css";
import {NavLink} from "react-router-dom";

export const RegistrationFooter = () => {
  return (
    <div className={s.rightFooter}>
      Already registered? <NavLink to="/login">Log in</NavLink>
    </div>
  );
};