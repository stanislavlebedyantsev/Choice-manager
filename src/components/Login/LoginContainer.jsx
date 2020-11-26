import Login from "./Login";
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
