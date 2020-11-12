import s from "../LoginComponent.module.css";
import {NavLink} from "react-router-dom";

export const LoginFooter = () => {
  return (
    <div className={s.rightFooter}>
      No account? <NavLink to={"/registration"}>Create One!</NavLink>
    </div>
  );
};