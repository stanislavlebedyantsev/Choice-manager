import s from './Registration.module.css';
import {Link, NavLink} from "react-router-dom";
import SlideRegMenu from "./SlideMenu/SlideRegMenu";
import App from "../../App";
import React from "react";

const RegistrationComponent = (props) => {
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
          <SlideRegMenu registrationUpdateText={props.registrationUpdateText}
                        registrationFun={props.registrationFun}
                        registrationStateText={props.registrationStateText}/>
         {/* <div className={s.rightSide}>
            <div className={s.rightHeader}>
              <h1 className={s.rightH1}>Welcome to Choice Manager</h1>
            </div>
            <div className={s.rightLogin}>
              <h3 className={s.rightLoginh2}>Login</h3>
              <div className={s.rightLoginUser}>
                <input type="firstName" placeholder="First name" className={s.firstName} />
                <input type="secondName" placeholder="Second name" className={s.secondName}/>
                <input type="Email" placeholder="Email" className={s.email}/>
                <input type="Username" placeholder="Username" className={s.username}/>
                <input type="phoneNumber" placeholder="Phone number" className={s.phoneNumber}/>
                <input type="password" placeholder="Password" className={s.password}/>
                <input type="confPassword" placeholder="Confirm password" className={s.confPassword}/>
                <div className={s.button} >
                  <nav>
                    <Link to={"/"} ><p className={s.rightText}>Login</p></Link>
                  </nav>
                </div>
              </div>
            </div>
            <div className={s.rightFooter}>
            </div>

          </div>*/}
        </div>
      </div>
  );
}

export default RegistrationComponent;