import Login from "./Login";
import {
  loginRequestThunkCreator,
  loginUpdateText,
  toggleIsFetching
} from "../../redux/loginReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  loginStateText: state.loginPage,
  isFetching: state.loginPage.isFetching
});


export default connect(mapStateToProps, {
  loginRequestThunkCreator,
  loginUpdateText,
  toggleIsFetching
})(Login);
