import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

//this will work if back-end return cookie after login, but it's currently working with localStorage

let mapStateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAuth,
  isTested: state.auth.isTested
});

export const withAuthAndTestingRedirectComponent = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (localStorage.getItem('isAuth') !== 'true') {
        return <Redirect to={'/login'}/>;
      } else if (localStorage.getItem('isAuth') === 'true'
        && localStorage.getItem('isTested') !== 'true')
        return <Redirect to={'/testing'}/>;
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};