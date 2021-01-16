import s from "../LoginComponent.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const LoginFooter = () => {
  return (
    <div className={s.rightFooter}>
      No account? <NavLink to={"/registration"}>Create One!</NavLink>
    </div>
  );
};
export default LoginFooter