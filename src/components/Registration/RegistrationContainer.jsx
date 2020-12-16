import RegForm from "./RegForm";
import {
  registrationRequestThunkCreator,
  registrationUpdateText
} from "../../redux/registrationReducer";
import {connect} from "react-redux";
import {hideError} from "../../redux/errorReducer";


const mapStateToProps = (state) => ({
  registrationState: state.registrationPage,
  isError: state.error.isError,
  errorText: state.error.errorText
});


export default connect(mapStateToProps, {
  registrationRequestThunkCreator,
  registrationUpdateText,
  hideError
})(RegForm);
