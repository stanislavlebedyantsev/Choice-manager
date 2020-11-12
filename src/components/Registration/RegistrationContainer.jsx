import RegForm from "./RegForm";
import React from "react";
import {requestRegistrationCreator, updateRegistrationTextCreator} from "../../redux/registrationReduser";
import {connect} from "react-redux";


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

const RegistrationComponent = connect(mapStateToProps, mapDispatchToProps)(RegForm);

export default RegistrationComponent;