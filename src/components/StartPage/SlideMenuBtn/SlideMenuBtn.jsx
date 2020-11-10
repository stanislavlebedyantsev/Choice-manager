import s from "./SlideMenuBtn.module.css";
import {NavLink} from "react-router-dom";

const SlideMenuBtn = (props) =>{
  return (<div className={s.leftHeaderButtons}>
    <NavLink to={"/registration"} className={`${s.links} ${s.link1}`}>Registration</NavLink>
    <NavLink to={"/login"} className={`${s.links} ${s.link2}`}>Login</NavLink>
    {/*<NavLink to={"/login"} className={`${s.links} ${s.link3}`}>Menu</NavLink>*/}
  </div>)
}
export default SlideMenuBtn