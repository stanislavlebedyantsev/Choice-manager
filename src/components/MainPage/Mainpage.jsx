import s from './Mainpage.module.css'
import {NavLink} from "react-router-dom";
import DeveloperDescription from "./DevelopersDescription/DevelopersDescription";

function Mainpage(props) {
  return (
    <div className={s.content}>
      <div className={s.firstBlock}>
        <div className={s.firstImg}>
          <img src="http://via.placeholder.com/665x389" alt=""/>
        </div>
        <div className={s.aboutProject}>
          <h1>About project</h1>
          <p>*project description*</p>
        </div>
      </div>
      <div className={s.secondBlock}>
        <div className={s.countOfRegistration}>
          <p>Coint of registrations: *count from server</p>
        </div>
        <div className={s.countOfGoals}>
          <p>Coint of goals: *count from server</p>
        </div>
      </div>
      <div className={s.thirdBlock}>
        <div className={s.secondImg}>
          <img src="http://via.placeholder.com/1336x356" alt=""/>
          <NavLink to="/registration" className={s.joinUsLink}>Join us</NavLink>
        </div>
      </div>
      <div className={s.lastBlock}>
        <div className={s.aboutTeam}>
          <h1>About team</h1>
          <DeveloperDescription/>
        </div>
      </div>
    </div>

  )
}

export default Mainpage