import s from './About.module.css';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Route, NavLink} from "react-router-dom";

const About = (props) => {
  return (
    <div className={s.background}>
      {/*<Header/>*/}
      <div className={s.content}>
        <div className={s.topSide}>
          <p className={s.aboutUsP}>ABOUT US</p>
        </div>
        <div className={s.bottomSide}>
          <div className={s.leftText}>
            <h1 className={s.leftTextH1}>Сhange your live for the better
            </h1>
            <p className={s.underH1}>This project is intended for people who completely want to change their lives for
              the better. We built this project for people who are confused on some of their life paths and are looking
              for a way to fix it.

              <br/><br/>Our friends and colleagues worked hard and we hope that this project will help you. We hope this
              course will help you find what you are looking for, good luck.
            </p>
            <h1 className={s.leftTextH1}>The talent behind failure</h1>
            <p className={s.underH1}>Big breakthrough take big diligences and mostly serious boasts some deep-thinking.
              Results reflect serious ideas and exceptional craftsmanship.
              <br/> Want to join us?<NavLink to="/registration" className={s.navLinkRegistr}> Click on</NavLink></p>
          </div>
          <div className={s.rightSide}>
            <h1 className={s.rightH1}>The best mentors</h1>
            <div className={s.mentorImgFirst}></div>
            <div className={s.mentorImgSecond}></div>
            <div className={s.mentorImgThird}></div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>

  );
};

export default About;