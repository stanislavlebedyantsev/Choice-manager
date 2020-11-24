import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from 'axios';
import {requestProfileData, updateProfileData} from "../../redux/profileReducer";

class ProfileApiContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`http://127.0.0.1:8080/profile/${localStorage.getItem('userId')}`,
        /*{
          headers: {
            accessKey: localStorage.getItem('accessKey')
          }
        }*/)
      .then(response => {
        this.props.getProfileData(response.data)
      });
  }
  render() {
    return(
      <Profile state={this.props.profileStateData} />
    )
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
    profileUpdateText: () => {
      dispatch(updateProfileData());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileApiContainer);
