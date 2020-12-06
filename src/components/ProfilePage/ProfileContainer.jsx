import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import * as axios from 'axios';
import {
  getProfileDataThunkCreator,
  profilePutUpdates,
  profileUpdateText, putProfileDataThunkCreator,
} from "../../redux/profileReducer";
import {toggleIsFetching} from "../../redux/profileReducer";
import Preloader from "../common/Preloader/Preloader";


class ProfileApiContainer extends React.Component {
  componentDidMount() {
    this.props.getProfileDataThunkCreator()
  }

  profilePutUpdates(data) {
    this.props.putProfileDataThunkCreator(data)
  }
  render() {
    return (
      <>
        {this.props.isFetching ?
          (<Preloader/>) :
          <div ref={this.contentRef}>
            <Profile state={this.props.profileStateData}
                     profileUpdateState={this.props.profileUpdateText}
                     profilePutState={this.profilePutUpdates.bind(this)}/>

          </div>
        }
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  profileStateData: state.profilePage,
  isFetching: state.profilePage.isFetching
});

export default connect(mapStateToProps,
  {
    getProfileDataThunkCreator,
    profileUpdateText,
    toggleIsFetching,
    putProfileDataThunkCreator
  })(ProfileApiContainer);
