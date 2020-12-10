import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
  getProfileDataThunkCreator,
  profileUpdateText, putProfileDataThunkCreator,
} from "../../redux/profileReducer";
import {toggleIsFetching} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {toggleIsTested} from "../../redux/authReducer";


class ProfileApiContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileDataThunkCreator()
    /*this.props.toggleIsTested(false)*/
  }

  profilePutUpdates(data) {
    this.props.putProfileDataThunkCreator(data)
  }
  render() {
    if (localStorage.getItem('isAuth') !== 'true') return <Redirect to={'/login'}/>
    return (
      <>
        {this.props.isFetching ?
          (<Preloader/>) :
          <div>
            <Profile state={this.props.profileStateData}
                     profileUpdateState={this.props.profileUpdateText}
                     profilePutState={this.profilePutUpdates.bind(this)}
            />
          </div>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profileStateData: state.profilePage,
  isFetching: state.profilePage.isFetching,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps,
  {
    getProfileDataThunkCreator,
    profileUpdateText,
    toggleIsFetching,
    putProfileDataThunkCreator,
    toggleIsTested
  })(ProfileApiContainer);
