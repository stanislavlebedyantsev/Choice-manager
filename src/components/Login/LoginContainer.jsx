import Login from "./Login";
import {
  loginRequestThunkCreator,
  loginUpdateText,
  toggleIsFetching
} from "../../redux/loginReducer";
import {connect} from "react-redux";
import {setUserData} from "../../redux/authReducer";


const mapStateToProps = (state) => ({
  loginStateText: state.loginPage,
  isFetching: state.loginPage.isFetching,
  isAuth: state.auth.isAuth,
  isTested: state.auth.isTested,
  stateUserData: state.auth
});


export default connect(mapStateToProps, {
  loginRequestThunkCreator,
  loginUpdateText,
  toggleIsFetching,
  setUserData
})(Login);
