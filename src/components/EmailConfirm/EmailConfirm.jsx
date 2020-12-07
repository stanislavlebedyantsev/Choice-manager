import s from './EmailConfirm.module.css';
import {NavLink} from "react-router-dom";

const EmailConfirm = () => {
  return (
    <div className={s.background}>
        <div className={s.container}>
            {/*<div className={s.logoGrid}>
                <div className={s.d3}>
                </div>
                <p className={s.chcMngr}>Choice Manager</p>
            </div>*/}
            <div className={s.welcomeGrid}>
                <p className={s.H1}>Welcome to choice manager!</p>
                <p className={s.underWelc}>We are thrilled to have you on board</p>
            </div>
            <div className={s.thirdGrid}>
                <p className={s.introP}>With your new Choice Manager account you can create your goal to bit it.Choice Manager is a site that helps students making choices based on passion, skills and an open mind. The site presents a structured way, in which you will discover new things about yourself and making it clear where you want to take action.
                </p>
                <button className={s.btn} onClick={() => window.location.href = '/login'}>Start working</button>
            </div>
        </div>
    </div>
  );
};

export default EmailConfirm;