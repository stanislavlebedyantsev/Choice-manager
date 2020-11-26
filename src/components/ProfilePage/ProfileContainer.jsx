import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from 'axios';
import {profilePutOnApi, requestProfileData, updateProfileData} from "../../redux/profileReducer";

class ProfileApiContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`http://127.0.0.1:8080/profile/me`,
        {
          headers: {
            Authorization: `${localStorage.getItem('tokenType')} ${localStorage.getItem('accessToken')}`
          }
        })
      .then(response => {
        this.props.getProfileData(response.data);
        console.log(response.data);
      });
  }
  componentWillUnmount() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
  }

  render() {
    return (
      <Profile state={this.props.profileStateData}
               profileUpdateState={this.props.profileUpdateText}
               profilePutState={this.props.profilePutUpdates}/>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profileStateData: state.profilePage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileData: (obj) => {
      dispatch(requestProfileData(obj));
    },
    profileUpdateText: (obj) => {
      dispatch(updateProfileData(obj));
    },
    profilePutUpdates: () => {
      dispatch(profilePutOnApi())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileApiContainer);
