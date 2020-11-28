import RegForm from "./RegForm";
import React from "react";
import {requestRegistrationCreator, updateRegistrationTextCreator} from "../../redux/registrationReducer";
import {connect} from "react-redux";
import LoginContainer from "../Login/LoginContainer";


const mapStateToProps = (state) => {
  return {
    registrationStateText: state.registrationPage
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    registrationRequest: () => {
      dispatch(requestRegistrationCreator());
    },
    registrationUpdateText: (obj) => {
      dispatch(updateRegistrationTextCreator(obj));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegForm);
