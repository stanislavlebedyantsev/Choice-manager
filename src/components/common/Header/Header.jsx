import s from './Header.module.css';
import React from 'react';
import {NavLink, Route} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../../../redux/authReducer";

class Header extends React.Component {
  logout() {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <nav className={s.content}>
          <div className={s.logo}>
            Choice manager <Route path={"/about"}> | About us</Route>
            <Route path={"/testing"}> | Testing</Route>
            <Route path={"/goals"}> | Goals</Route>
            <Route path={"/profile"}> | Profile</Route>
          </div>
          <div>
            <Route path={"/goals"}> <NavLink to={'/profile'} className={s.navLink}>Profile</NavLink></Route>
            <Route path={"/profile"}> <NavLink to={'/goals'} className={s.navLink}>Goals</NavLink></Route>
            <NavLink to={`/login`} className={s.signIn} onClick={this.logout.bind(this)}>logout</NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
  logout
})(Header);