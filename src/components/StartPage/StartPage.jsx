import s from "./StartPage.module.css";
import {Route, NavLink} from "react-router-dom";
import SlideMenuBtn from "./SlideMenuBtn/SlideMenuBtn";
import About from "../About/About";

const StartPage = (props) => {
  return (
    <div>
      <ul className={s.body_slides}>
          <li>
              <div className={s.slider1}>
                  <div className={s.slider1H1}>
                      Choice manager.<br/> The way to create your own
                  </div>
                  <div className={s.slider1Right}>
                      <p>One of the most important things in life is to find your life vision and decide what you strive at and what you want to accomplish.
                      <br/><br/>    Otherwise you drift from place to place without a plan, without a purpose. A life based on random decisions is a confusing and often difficult one. </p>
                  </div>
              </div>
          </li>
          <li>
              <div>asd</div>
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