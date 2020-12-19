import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
  getProfileDataThunkCreator, putProfileDataThunkCreator,
  updateProfilePhotoThunkCreator
} from "../../redux/profileReducer";
import {toggleIsFetching} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {withAuthAndTestingRedirectComponent} from "../../hoc/withAuthAndTestingRedirect";
import {compose} from "redux";
import {getProfileData, getProfileIsFetching} from "../../redux/selectors";


class ProfileApiContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileDataThunkCreator();
  }

  editProfilePhoto =(photo) => {
    this.props.updateProfilePhotoThunkCreator(photo);
  }

  profilePutUpdates = (profileData) => {
    this.props.putProfileDataThunkCreator(profileData);
  }

  render() {
    return (
      <>
        {this.props.isFetching ?
          (<Preloader/>) :
          <Profile state={this.props.profileStateData}
                   profilePutState={this.profilePutUpdates}
                   editProfilePhoto={this.editProfilePhoto}
          />
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profileStateData: getProfileData(state),
  isFetching: getProfileIsFetching(state)
});


export default compose(
  connect(mapStateToProps,
    {
      getProfileDataThunkCreator,
      toggleIsFetching,
      putProfileDataThunkCreator,
      updateProfilePhotoThunkCreator
    }),
  withAuthAndTestingRedirectComponent,
)(ProfileApiContainer);
