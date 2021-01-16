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
      /*if (!this.props.isAuth)
        return <Redirect to={'/login'}/>;
      else if (this.props.isAuth && !this.props.isTested)
        return <Redirect to={'/testing'}/>;*/
      if (sessionStorage.getItem('isAuth') !== 'true') {
        return <Redirect to={'/login'}/>;
      } else if (sessionStorage.getItem('isAuth') === 'true'
        && sessionStorage.getItem('isTested') !== 'true')
        return <Redirect to={'/testing'}/>;
      return <Component {...this.props} />;
    }
  }

  return connect(mapStateToPropsForRedirect)(RedirectComponent);
};