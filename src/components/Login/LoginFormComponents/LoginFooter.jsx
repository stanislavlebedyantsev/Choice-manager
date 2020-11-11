import s from "../LoginComponent.module.css";
import {NavLink} from "react-router-dom";

export const LoginFooter = (props) => {
  return (
    <div className={s.rightFooter}>
      No account? <NavLink to={"/registration"} onClick={props.hideError}>Create One!</NavLink>
    </div>
  );
};