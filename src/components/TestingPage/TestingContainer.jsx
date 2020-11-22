import {connect} from "react-redux";
import {getTestingQuestions, postAnswers, updateAnswers} from "../../redux/testingReducer";
import TestingForm from "./TestingForm";


const mapStateToProps = (state) => {
  return {
    TestingQuestions: state.testingPage
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getTest: (obj) => {
      dispatch(getTestingQuestions());
    },
    updateTestAnswers: (obj) => {
      dispatch(updateAnswers(obj));
    },
    postAnswersData: () => {
      dispatch(postAnswers());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestingForm);

