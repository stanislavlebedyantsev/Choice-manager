import LoginForm from "./LoginForm";
import {requestLoginCreator, updateLoginTextCreator} from "../../redux/loginReducer";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    loginStateText: state.loginPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: () => {
      dispatch(requestLoginCreator());
    },
    loginUpdateText: (obj) => {
      dispatch(updateLoginTextCreator(obj));
    },
  };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginForm);

export default LoginContainer;