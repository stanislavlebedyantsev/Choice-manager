import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {
  editProfilePhoto,
  getProfileDataThunkCreator,
  profileUpdateText, putProfileDataThunkCreator, updateProfilePhotoThunkCreator,
} from "../../redux/profileReducer";
import {toggleIsFetching} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";
import {withAuthAndTestingRedirectComponent} from "../../hoc/withAuthAndTestingRedirect";



class ProfileApiContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileDataThunkCreator();
  }

  editProfilePhoto(photo) {
    this.props.updateProfilePhotoThunkCreator(photo);
  }

  profilePutUpdates(data) {
    this.props.putProfileDataThunkCreator(data);
  }

  render() {
    return (
      <>
        {this.props.isFetching ?
          (<Preloader/>) :
          <div>
            <Profile state={this.props.profileStateData}
                     profileUpdateState={this.props.profileUpdateText}
                     profilePutState={this.profilePutUpdates.bind(this)}
                     editProfilePhoto={this.editProfilePhoto.bind(this)}
            />

          </div>
        }
      </>
    );
  }
}

let AuthRedirectComponent = withAuthAndTestingRedirectComponent(ProfileApiContainer);

const mapStateToProps = (state) => ({
  profileStateData: state.profilePage,
  isFetching: state.profilePage.isFetching,
  isAuth: state.auth.isAuth,
  isTested: state.auth.isTested,
});

export default connect(mapStateToProps,
  {
    getProfileDataThunkCreator,
    profileUpdateText,
    toggleIsFetching,
    putProfileDataThunkCreator,
    editProfilePhoto,
    updateProfilePhotoThunkCreator
  })(AuthRedirectComponent);
