import Login from "./Login";
import {
  loginRequestThunkCreator,
  loginUpdateText,
  toggleIsFetching
} from "../../redux/loginReducer";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";
import {hideError} from "../../redux/errorReducer";

const mapStateToProps = (state) => ({
  loginStateText: state.loginPage,
  isFetching: state.loginPage.isFetching,
  isAuth: state.auth.isAuth,
  isTested: state.auth.isTested,
  isError: state.error.isError,
  errorText: state.error.errorText
});

export default connect(mapStateToProps, {
  loginRequestThunkCreator,
  loginUpdateText,
  toggleIsFetching,
  setUserData,
  hideError
})(Login);
