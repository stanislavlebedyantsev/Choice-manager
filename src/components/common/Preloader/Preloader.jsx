import s from "./Preloader.module.css";
import preloader from "../../../images/Preloader.svg";
import React from "react";

const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={preloader} alt={'preloader'}/>
    </div>
  );
};
export default Preloader;