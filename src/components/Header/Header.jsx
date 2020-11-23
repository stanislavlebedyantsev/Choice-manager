import s from './Header.module.css';
import {Route, NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <div>
      <nav className={s.content}>
        <div className={s.logo}>
          Choice manager <Route path={"/about"}> | About us</Route>
          <Route path={"/testing"}> | Testing</Route>
          <Route path={"/goals"}> | Goals</Route>
          <Route path={"/profile"}> | Profile</Route>
        </div>
        <div className={s.signIn}>
          <Route path={"/about"}><NavLink to="/login">SignIn</NavLink></Route>
        </div>
      </nav>
    </div>
  );
};

export default Header;