import s from "./StartPage.module.css";
import {Route, NavLink} from "react-router-dom";
import SlideMenuBtn from "./SlideMenuBtn/SlideMenuBtn";

const StartPage = (props) => {
  return (
    <div className={s.startPage}>
      <div className={s.content}>
        <div className={s.leftSide}>
          <div className={s.greeting}>
            <h1>Welcome to</h1>
            <h2>Choice Manager</h2>
          </div>
          <div className={s.projectVision}>
            <p>Your way to be better</p>
          </div>
          <div className={s.description}>
            <p>Choice Manager is a site that helps students making choices based on passion, skills and an open mind.
              The site presents a structured way, in which you will discover new things about yourself and making it
              clear where you want to take action. </p>
          </div>
          <div className={s.aboutUs}>
            <NavLink to="/about" className={s.aboutUsLink}>Learn more</NavLink>
          </div>
        </div>

        <div className={s.rightSide}>
          <SlideMenuBtn/>
          {/*<Route path={"/register"} render={() => <RegisterSlide/>}/>*/}
        </div>
      </div>
    </div>

  );
};
export default StartPage;