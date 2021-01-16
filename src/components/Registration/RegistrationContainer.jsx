import Registration from "./Registration";
import {
  registrationRequestThunkCreator
} from "../../redux/registrationReducer";
import {connect} from "react-redux";
import {getErrorText, getIsError, getIsRegistered} from "../../redux/selectors";


const mapStateToProps = (state) => ({
  registrationState: getIsRegistered(state),
  isError: getIsError(state),
  errorText: getErrorText(state)
});


export default connect(mapStateToProps, {
  registrationRequestThunkCreator
})(Registration);
