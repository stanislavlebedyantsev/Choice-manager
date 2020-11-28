import Login from "./Login";
import {requestLoginCreator, updateLoginTextCreator} from "../../redux/loginReducer";
import {connect} from "react-redux";
import {toggleIsFetching} from "../../redux/loginReducer";


const mapStateToProps = (state) => {
  return {
    loginStateText: state.loginPage,
    isFetching: state.loginPage.isFetching
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
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetching(isFetching));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
