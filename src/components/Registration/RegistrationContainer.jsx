import RegForm from "./RegForm";
import React from "react";
import {
  registrationRequest,
  registrationUpdateText
} from "../../redux/registrationReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  registrationStateText: state.registrationPage
});


export default connect(mapStateToProps, {
  registrationRequest,
  registrationUpdateText
})(RegForm);
