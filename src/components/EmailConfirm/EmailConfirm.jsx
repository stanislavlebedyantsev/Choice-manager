import s from './EmailConfirm.module.css';
import {NavLink} from "react-router-dom";

const EmailConfirm = () => {
  return (
    <div>
      <div className={s.container}>
        <div className={s.headName}><p>Thank you for using Choice-manager</p></div>
        <div className={s.sendAgain}>
          <p>Your email successful confirmed</p>
          <p>Now you can <NavLink to={'/login'}>Sign in</NavLink></p>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirm;