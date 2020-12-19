import Login from "./Login";
import {connect} from "react-redux";
import {loginRequestThunkCreator, setUserData} from "../../redux/authReducer";
import {hideError} from "../../redux/errorReducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

export default compose(
  withRouter,
  connect(null, {
    loginRequestThunkCreator,
    setUserData,
    hideError
  })
)(Login);
