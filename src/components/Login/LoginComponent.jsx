import s from './LoginComponent.module.css';
import {Link, NavLink} from "react-router-dom";
import SlideLoginMenu from "./SlideMenu/SlideLoginMenu";


const LoginComponent = (props) => {
  return (
    <div className={s.background}>
      <div className={s.container}>
          {/*<div className={s.leftSide}>
              <div className={s.leftHeader}>
                  <div className={s.leftHeaderButtons}>
                      <nav>
                          <Link to={"/registration"}><p className={s.leftButtons}>Registration</p></Link>
                          <Link to={"/login"}><p className={s.leftButtons}>Login</p></Link>
                          <Link to={"/login"}><p className={s.leftButtons}>Menu</p></Link>
                      </nav>
                  </div>
              </div>
              <div className={s.leftText}>
                  <div className={s.leftTextInfo}>
                      <div className={s.textInfo}>
                          <h1>Welcome to</h1>
                          <h1>Choice Manager</h1>
                      </div>
                  </div>
              </div>
          </div>*/}
          <SlideLoginMenu logunFun={props.loginFun}
                          loginStateText={props.loginStateText}
                          loginUpdateText={props.loginUpdateText}/>
      </div>
    </div>
  );
}

export default LoginComponent;