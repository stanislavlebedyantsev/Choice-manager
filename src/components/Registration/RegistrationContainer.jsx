import RegForm from "./RegForm";
import React from "react";
import {
  registrationRequestThunkCreator,
  registrationUpdateText
} from "../../redux/registrationReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  registrationStateText: state.registrationPage
});


export default connect(mapStateToProps, {
  registrationRequestThunkCreator,
  registrationUpdateText
})(RegForm);
