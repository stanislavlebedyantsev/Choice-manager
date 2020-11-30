import Login from "./Login";
import {
  loginRequest,
  loginUpdateText,
  toggleIsFetching
} from "../../redux/loginReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => ({
  loginStateText: state.loginPage,
  isFetching: state.loginPage.isFetching
});


export default connect(mapStateToProps, {
  loginRequest,
  loginUpdateText,
  toggleIsFetching
})(Login);
