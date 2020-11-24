import s from "./StartPage.module.css";
import {Route, NavLink} from "react-router-dom";
import SlideMenuBtn from "./SlideMenuBtn/SlideMenuBtn";
import About from "../About/About";

const StartPage = (props) => {
  return (
    <div>
      <ul className={s.body_slides}>
        <li>
          <div></div>
        </li>
        <li>
          <div></div>
        </li>
        <li>
        </li>
      </ul>
      <div>
        <About/>
      </div>
    </div>
  );
}
export default StartPage;