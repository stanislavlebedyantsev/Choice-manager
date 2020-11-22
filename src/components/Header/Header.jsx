import s from './Header.module.css';
import {Route, NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <nav className={s.content}>
      <div className={s.logo}>
        Choice manager
      </div>
      <div className={s.signIn}>
        <Route path={"/about"}><NavLink to="/login">SignIn</NavLink></Route>
      </div>
    </nav>
  );
};

export default Header;