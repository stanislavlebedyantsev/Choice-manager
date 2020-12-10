import s from './Header.module.css';
import React from 'react';
import {Redirect, Route} from "react-router-dom";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import {connect} from "react-redux";
import {logout} from "../../../redux/authReducer";

class Header extends React.Component {
  logout() {
    this.props.logout();
    window.location.href = '/login';
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={'/login'}/>;
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
            <Route path={"/goals"} render={() => <DropDownMenu linkTo={"profile"} logout={this.logout.bind(this)}/>}/>
            <Route path={"/profile"} render={() => <DropDownMenu linkTo={"goals"} logout={this.logout.bind(this)}/>}/>
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