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
          <div className="wrapper">
            <input type="radio" name="point" id="slide1" checked/>
              <input type="radio" name="point" id="slide2"/>
                <input type="radio" name="point" id="slide3"/>
                  <input type="radio" name="point" id="slide4"/>
                    <input type="radio" name="point" id="slide5"/>
                      <div className="slider">
                        <div className="slides slide1"></div>
                        <div className="slides slide2"></div>
                        <div className="slides slide3"></div>
                        <div className="slides slide4"></div>
                        <div className="slides slide5"></div>
                      </div>
                      <div className="controls">
                        <label htmlFor="slide1"></label>
                        <label htmlFor="slide2"></label>
                        <label htmlFor="slide3"></label>
                        <label htmlFor="slide4"></label>
                        <label htmlFor="slide5"></label>
                      </div>
          </div>
          <SlideMenuBtn/>
          {/*<Route path={"/register"} render={() => <RegisterSlide/>}/>*/}
        </div>
        {/*<div className={s.slideBar}></div>*/}
      </div>
    </div>

  );
};
export default StartPage;