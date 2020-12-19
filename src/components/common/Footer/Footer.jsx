import React from "react";
import s from './Footer.module.css';
import {NavLink} from "react-router-dom";


const Footer = React.memo(props => (
  <div>
    <div className={s.background}>
      <div className={s.companyName}>
        Choice manager <br/><br/>
        Choice Manager is a site that helps students making choices based on passion, skills and an open mind.
      </div>
      <div className={s.quickLinks}>
        Quick links
        <NavLink to="/about" className={s.aboutUs}>About us</NavLink>
        <NavLink to="/registration" className={s.aboutUs}>Join us</NavLink>
      </div>
      <div className={s.contactUs}>
        Contact us
        <a href="" className={s.twitter}>Twitter</a>
        <a href="" className={s.facebook}>Facebook</a>
        <a href="" className={s.instagram}>Instagram</a>
      </div>
    </div>
  </div>
));

export default Footer;